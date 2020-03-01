import {
    Block,
    Literal,
    BlockGroup,
    Thing
} from "dalkak";

var toDalkBlockGroup: (entBlockGroup: Array<any>) => BlockGroup = (entBlockGroup) => {
    return new BlockGroup({blocks: entBlockGroup.map(toDalkBlock)});
};

var toDalkBlock = (entBlock) => {
    let dalkBlock = new Block;
    let i = 0;
    entBlock.params.forEach(entParam => {
        if(entParam){
            if(typeof entParam == "object"){
                dalkBlock.setParam(String(i), toDalkBlock(entParam));
            }else{
                dalkBlock.setParam(String(i), Literal.from(entParam));
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
Entry.container.objects_.map(entryObject => 
    new Thing({
        blockGroups: (entryObject.script.toJSON() as Array<any>).map(toDalkBlockGroup)
    })
);

