import toDalk from "./index";

import test from "./test"

let project = toDalk(test);
project.run();
setTimeout(async () => {
    console.log(project.variables.value.vv?.value);
}, 1000);