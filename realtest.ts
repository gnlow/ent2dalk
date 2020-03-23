import toDalk from "./index";

import test from "./test"
import { Block, BlockGroup, Literal } from "dalkak";

import basic from "@dalkak/basic";

let project = toDalk(test);

const log = new Block({
    name: "log",
    template: "{(val)을 출력하기}",
    func: ({val}, project, local) => {
        console.log(val);
    }
});

const get = new Block({
    name: "get",
    template: "((name) 값)",
    func: ({name}, project, local) => {
        const variable = local.getVariable(name);
        return variable.value ?? (variable.value = 0);
    }
});

get.setParam("name", Literal.from("vv"))
log.setParam("val", get)
project.thingGroup.children[0].blockGroups[0] =
project.thingGroup.children[0].blockGroups[0].attach(BlockGroup.fromBlock(log));

console.log(project.thingGroup.children[0].blockGroups[0].blocks[1])
project.run();