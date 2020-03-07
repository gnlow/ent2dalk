import {
    Block,
    Literal,
    BlockGroup,
    Thing,
    Project,
    Vector,
    Type,
    Extension,
    Pack,
} from "dalkak";

import * as entry from "@dalkak/entry";


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
    //console.log(entBlock.type)
    //console.log(Object.keys(project.pack.blocks.value))
    let paramNames = [...Object.entries(dalkBlock.params.value).map(a => a[0])]; // 순서를 보장할 수 없음. 수정 필요.
    entBlock.params.forEach(entParam => {
        if(entParam){
            //console.log(entBlock.type, paramNames, i, paramNames[i])
            if(typeof entParam == "object"){
                dalkBlock.setParam(paramNames[i], toDalkBlock(entParam, _target, project));
            }else{
                dalkBlock.setParam(paramNames[i], Literal.from(entParam));
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
let toDalkProject = async (entProject: typeof test) => {
    let project = new Project;
    project.mount(...Object.entries(entry).map(a => a[1]));

    let mountedPacks = [];
    let functionPack = new Pack;
    for(let entryFunction of entProject.functions){
        let regResult = /dalk__(.*?)__(.*)/.exec(entryFunction.id);
        if(regResult){
            // Dalkak 확장 블록
            let [id, packID, blockName] = regResult;
            console.log(mountedPacks, packID, !mountedPacks.includes(packID))
            if(!mountedPacks.includes(packID)){
                let pack: Extension;
                pack = await import(`https://unpkg.com/${packID}?module`);
                Object.keys(pack.blocks.value).forEach(key => {
                    pack.blocks.value[`func_dalk__${packID}__${key}`] = pack.blocks.value[key];
                    delete pack.blocks.value[key];
                }); // 패키지명 중복 대비. Dalkak에서 패치되면 삭제 예정
                project.mount(pack);
            }
        }else{
            // 일반 함수 블록
            /*
            let funcBlock = new BlockGroup({
                name: entryFunction.id,
                template: (<string>entryFunction.block.template).replace(/%(\d+)/g, (m,x) => `(param${x})`)
            });
            functionPack.blocks.value[`func_${entryFunction.id}`] = funcBlock;
            */
        }

    }
    entProject.objects.forEach(entryObject => {
        let _target = toDalkThing(entryObject, project);
        project.addThing(_target);
    });
    return project;
}
export default toDalkProject;
/*
(async () => {
    let project = await toDalkProject(test)
    project.run();
    setTimeout(() => console.log(project.thingGroup.children[0].pos), 1000)
})()

*/