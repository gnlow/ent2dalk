import {
    Block,
    Literal,
    BlockGroup,
    Thing,
    Project,
    Vector,
    Type,
    Pack,
    Template,
    Variable,
    Event,
} from "dalkak";

import * as entry from "@dalkak/entry";
import hash from "@dalkak/hash";
import json from "@dalkak/json";
import kachi from "@dalkak/kachi";
import kachiServer from "@dalkak/kachi-server";
const packs = {
    "@dalkak/hash": hash,
    "@dalkak/json": json,
    "@dalkak/kachi": kachi,
    "@dalkak/kachi-server": kachiServer,
}; // Dynamic Import가 잘 안 돼서 임시로 씀.
var toDalkBlockGroup: (entBlockGroup: Array<any>, _target: Thing, project: Project, entId) => BlockGroup = (entBlockGroup, _target, project, entId) => {
    if(project.pack.events.value[entBlockGroup[0].type]){
        let returnValue = new BlockGroup({blocks: entBlockGroup.splice(1).map(a => toDalkBlock(a, _target, project, entId))});
        project.pack.events.value[entBlockGroup[0].type].link(returnValue);
        return returnValue;
    }else if(entBlockGroup[0].type == "when_message_cast"){
        let returnValue = new BlockGroup({blocks: entBlockGroup.splice(1).map(a => toDalkBlock(a, _target, project, entId))});
        project.events.value[entId[entBlockGroup[0].params[1]]].link(returnValue);
        return returnValue;
    }else{
        return new BlockGroup({blocks: entBlockGroup.map(a => toDalkBlock(a, _target, project, entId))});
    }
};

var toDalkBlock = (entBlock, _target: Thing, project: Project, entId) => {
    let dalkBlock = Block.fromBlock(project.pack.blocks.value[entBlock.type]);
    let i = 0;
    let paramNames = [...Object.entries(dalkBlock.params.value).map(a => a[0])]; // 순서를 보장할 수 없음. 수정 필요.
    entBlock.params?.forEach(entParam => {
        if(entParam){
            if(typeof entParam == "object"){
                dalkBlock.setParam(paramNames[i] || "_targetVal", toDalkBlock(entParam, _target, project, entId));
            }else{
                dalkBlock.setParam(paramNames[i] || "_targetVal", Literal.from(entParam));
            }
            i++;
        }
    });
    entBlock.statements?.forEach(entBlockGroup => {
        if(entBlockGroup){
            dalkBlock.setParam(paramNames[i], toDalkBlockGroup(entBlockGroup, _target, project, entId));
        }
        i++;
    });
    dalkBlock.setParam("_target", new Block({func: () => _target}));
    dalkBlock.paramTypes.value._target = Type.fromConstructor(Thing);
    return dalkBlock;
};
var toDalkThing = (entryObject: typeof test.objects[0], project, entId) => {
    let _target = new Thing({pos: new Vector(0, 0)});
    _target.blockGroups = JSON.parse(entryObject.script).map(a => toDalkBlockGroup(a, _target, project, entId));
    return _target;
}
import type test from "./test"
let toDalkProject = (entProject: typeof test) => {
    let project = new Project;
    let entryClone = entry;
    delete (entryClone as any).default;
    project.mount(...Object.entries(entryClone).map(a => a[1]));

    let entId: Record<string, string> = {};
    entProject.variables.forEach(entVar => {
        entId[entVar.id] = entVar.name;
        if(!entVar.name.startsWith("_")){
            switch(entVar.variableType){
                // case "timer":
                // case "answer":
                case "variable":
                    project.variables.value[entVar.name] = new Variable({
                        name: entVar.name,
                        value: entVar.value,
                    })
                    break;
                case "list":
                    project.variables.value[entVar.name] = new Variable({
                        name: entVar.name,
                        value: entVar.array.map(val => val.data),
                    })
                    break;
            }
        } 
    });
    entProject.messages.forEach((entMsg: {id: string, name: string}) => {
        project.events.value[entMsg.name] = new Event(entMsg.name);
        entId[entMsg.id] = entMsg.name;
    });

    let mountedPacks = [];
    for(let entryFunction of entProject.functions){
        let regResult = /dalk__(.*?)__(.*)/.exec(entryFunction.id);
        if(regResult){
            // Dalkak 확장 블록
            const [id, packID, blockName] = regResult;
            if(!mountedPacks.includes(packID)){
                let pack: Pack;
                pack = packs[packID];
                Object.keys(pack.blocks.value).forEach(key => {
                    if(pack.blocks.value[key].returnType.extend != Block){
                        // 리턴값이 있는 Dalkak 확장 함수.
                        // Entry에서는 Dalkify에 의해 
                        // (원래 내용) -> (저장할 변수) 꼴로 변환됨.
                        // 다시 변환해야함.
                        let targetDalkBlock = pack.blocks.value[key];
                        pack.blocks.value[`func_dalk__${packID}__${key}`] = new Block({
                            name: `func_dalk__${packID}__${key}`,
                            template: `{ ${Template.parseReturnType(targetDalkBlock.template.template, targetDalkBlock.pack).content} → (_targetVal) }`,
                            func: async ({_targetVal, ...params}, project, local, platform) => {
                                const variable = local.getVariable(_targetVal);
                                variable.value = await targetDalkBlock.func(params, project, local, platform);
                            }
                        });
                    }else{
                        pack.blocks.value[`func_dalk__${packID}__${key}`] = pack.blocks.value[key];
                    }
                    
                    delete pack.blocks.value[key];
                }); // 패키지명 중복 대비. Dalkak에서 패치되면 삭제 예정
                project.mount(pack);
                mountedPacks.push(packID);
            }
        }else{
            // 일반 함수 블록
            // WIP
        }

    }
    entProject.objects.forEach(entryObject => {
        let _target = toDalkThing(entryObject, project, entId);
        project.addThing(_target);
    });
    return {project, idList: entId};
}
export default toDalkProject;