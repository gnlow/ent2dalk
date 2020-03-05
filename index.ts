import {
    Block,
    Literal,
    BlockGroup,
    Thing,
    Project,
} from "dalkak";

import * as entry from "@dalkak/entry";

let project = new Project;
project.mount(...Object.entries(entry).map(a => a[1]));
var toDalkBlockGroup: (entBlockGroup: Array<any>) => BlockGroup = (entBlockGroup) => {
    let returnValue = new BlockGroup({blocks: entBlockGroup.splice(1).map(toDalkBlock)});
    project.events.value[entBlockGroup[0].type].link(returnValue);
    return returnValue;
};

var toDalkBlock = (entBlock) => {
    let dalkBlock = project.pack.blocks.value[entBlock.type];
    let i = 0;
    let paramNames = [...Object.entries(dalkBlock.params.value).map(a => a[0])]; // 순서를 보장할 수 없음. 수정 필요.
    entBlock.params.forEach(entParam => {
        if(entParam){
            if(typeof entParam == "object"){
                dalkBlock.setParam(paramNames[i], toDalkBlock(entParam));
            }else{
                dalkBlock.setParam(paramNames[i], Literal.from(entParam));
            }
            i++;
        }
    });
    entBlock.statements.forEach(entBlockGroup => {
        dalkBlock.setParam(String(i), toDalkBlockGroup(entBlockGroup));
    });
    
    return dalkBlock;
};
export default Entry => 
Entry.container.objects_.forEach(entryObject => {
    project.addThing(new Thing({
        blockGroups: (entryObject.script.toJSON() as Array<any>).map(toDalkBlockGroup)
    }));
});