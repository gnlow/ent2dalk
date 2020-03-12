import {
    Block,
    Literal,
    BlockGroup,
    Thing,
    Project,
    Vector,
    Type,
    Pack,
} from "dalkak";

import * as entry from "@dalkak/entry";
import hash = require("@dalkak/hash");
import json = require("@dalkak/json");
import kachi = require("@dalkak/kachi");
const packs = {
    "@dalkak/hash": hash,
    "@dalkak/json": json,
    "@dalkak/kachi": kachi,
}; // Dynamic Import가 잘 안 돼서 임시로 씀.

var toDalkBlockGroup: (entBlockGroup: Array<any>, _target: Thing, project) => BlockGroup = (entBlockGroup, _target, project) => {
    if(project.pack.events.value[entBlockGroup[0].type]){
        let returnValue = new BlockGroup({blocks: entBlockGroup.splice(1).map(a => toDalkBlock(a, _target, project))});
        project.pack.events.value[entBlockGroup[0].type].link(returnValue);
        return returnValue;
    }else{
        return new BlockGroup({blocks: entBlockGroup.map(a => toDalkBlock(a, _target, project))});
    }
};

var toDalkBlock = (entBlock, _target: Thing, project: Project) => {
    
    let dalkBlock = project.pack.blocks.value[entBlock.type];
    let i = 0;
    let paramNames = [...Object.entries(dalkBlock.params.value).map(a => a[0])]; // 순서를 보장할 수 없음. 수정 필요.
    entBlock.params.forEach(entParam => {
        if(entParam){
            console.log(i, paramNames)
            if(typeof entParam == "object"){
                dalkBlock.setParam(paramNames[i] || "_targetVal", toDalkBlock(entParam, _target, project));
            }else{
                dalkBlock.setParam(paramNames[i] || "_targetVal", Literal.from(entParam));
            }
            i++;
        }
    });
    entBlock.statements.forEach(entBlockGroup => {
        if(entBlockGroup){
            dalkBlock.setParam(paramNames[i], toDalkBlockGroup(entBlockGroup, _target, project));
        }
        i++;
    });
    dalkBlock.setParam("_target", new Block({func: () => _target}));
    dalkBlock.paramTypes.value._target = Type.fromConstructor(Thing);
    return dalkBlock;
};
var toDalkThing = (entryObject: typeof test.objects[0], project) => {
    let _target = new Thing({pos: new Vector(0, 0)});
    _target.blockGroups = JSON.parse(entryObject.script).map(a => toDalkBlockGroup(a, _target, project));
    return _target;
}
import test from "./test"
let toDalkProject = (entProject: typeof test) => {
    let project = new Project;
    project.mount(...Object.entries(entry).map(a => a[1]));

    let mountedPacks = [];
    for(let entryFunction of entProject.functions){
        let regResult = /dalk__(.*?)__(.*)/.exec(entryFunction.id);
        if(regResult){
            // Dalkak 확장 블록
            let [id, packID, blockName] = regResult;
            console.log(mountedPacks, packID, !mountedPacks.includes(packID))
            if(!mountedPacks.includes(packID)){
                let pack: Pack;
                pack = packs[packID];
                Object.keys(pack.blocks.value).forEach(key => {
                    if(pack.blocks.value[key].returnType.extend == "" || pack.blocks.value[key].returnType.extend == false){
                        // 리턴값이 있는 Dalkak 확장 함수.
                        // Entry에서는 Dalkify에 의해 
                        // (원래 내용) -> (저장할 변수) 꼴로 변환됨.
                        // 다시 변환해야함.
                        pack.blocks.value[`func_dalk__${packID}__${key}`] = entry.variable.blocks.value.set_variable;
                        pack.blocks.value[`func_dalk__${packID}__${key}`].setParam("name", pack.blocks.value[key].params.value._targetVal);
                        delete pack.blocks.value[key].params.value._targetVal;
                        delete pack.blocks.value[key].params.value._target;
                        pack.blocks.value[`func_dalk__${packID}__${key}`].setParam("value", pack.blocks.value[key]);
                    }else{
                        pack.blocks.value[`func_dalk__${packID}__${key}`] = pack.blocks.value[key];
                    }
                    
                    delete pack.blocks.value[key];
                }); // 패키지명 중복 대비. Dalkak에서 패치되면 삭제 예정
                project.mount(pack);
            }
        }else{
            // 일반 함수 블록
            // WIP
        }

    }
    entProject.objects.forEach(entryObject => {
        let _target = toDalkThing(entryObject, project);
        project.addThing(_target);
    });
    return project;
}
export default toDalkProject;