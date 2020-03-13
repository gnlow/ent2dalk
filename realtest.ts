import toDalk from "./index";

import test from "./test"

let project = toDalk(test);
project.pack.blocks.value[`func_dalk__@dalkak/json__parse`].func = a => console.log(a)
project.run();
setTimeout(async () => {
    console.log(JSON.parse(await project.thingGroup.children[0].blockGroups[0].blocks[0].params.value.json.run()))
    console.log(project.variables.value.vv.value);
}, 1000);