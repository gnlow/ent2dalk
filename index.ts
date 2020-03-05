import {
    Block,
    Literal,
    BlockGroup,
    Thing,
    Project,
    Vector,
    Type,
} from "dalkak";

import * as entry from "@dalkak/entry";

let project = new Project;
project.mount(...Object.entries(entry).map(a => a[1]));
var toDalkBlockGroup: (entBlockGroup: Array<any>, _target: Thing) => BlockGroup = (entBlockGroup, _target) => {
    if(project.pack.events.value[entBlockGroup[0].type]){
        let returnValue = new BlockGroup({blocks: entBlockGroup.splice(1).map(a => toDalkBlock(a, _target))});
        project.pack.events.value[entBlockGroup[0].type].link(returnValue);
        return returnValue;
    }else{
        return new BlockGroup({blocks: entBlockGroup.map(a => toDalkBlock(a, _target))});
    }
};

var toDalkBlock = (entBlock, _target: Thing) => {
    let dalkBlock = project.pack.blocks.value[entBlock.type];
    let i = 0;
    let paramNames = [...Object.entries(dalkBlock.params.value).map(a => a[0])]; // 순서를 보장할 수 없음. 수정 필요.
    entBlock.params.forEach(entParam => {
        if(entParam){
            console.log(entBlock.type, paramNames, i, paramNames[i])
            if(typeof entParam == "object"){
                dalkBlock.setParam(paramNames[i], toDalkBlock(entParam, _target));
            }else{
                dalkBlock.setParam(paramNames[i], Literal.from(entParam));
            }
            i++;
        }
    });
    entBlock.statements.forEach(entBlockGroup => {
        if(entBlockGroup){
            dalkBlock.setParam(paramNames[i], toDalkBlockGroup(entBlockGroup, _target));
        }
        i++;
    });
    dalkBlock.setParam("_target", new Block({func: () => _target}));
    dalkBlock.paramTypes.value._target = Type.fromConstructor(Thing);
    return dalkBlock;
};
let convert = Entry => 
Entry.container.objects_.forEach(entryObject => {
    let _target = new Thing;
    _target.blockGroups = (entryObject.script.toJSON() as Array<any>).map(a => toDalkBlockGroup(a, _target));
    project.addThing(_target);
});
export default convert;

import test from "./test";

(async () => {
    var _target = new Thing({pos: new Vector(0, 0)});
    _target.blockGroups = test.map(a => toDalkBlockGroup(a, _target))
    project.addThing(_target);
    _target.run();
    setTimeout(()=>console.log(project.thingGroup.children[0].pos),1000)
    //console.log(typeof await _target.blockGroups[0].blocks[0].params.value.n.run())
    //console.log(await (_target.blockGroups[0].blocks[0].params.value.code as BlockGroup).blocks[0].params)
})()
//console.log(project.thingGroup.children[0].blockGroups[0].blocks[0].params.value)
