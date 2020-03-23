import toDalk from "./index";

import test from "./test"
import { Block, BlockGroup, Literal, Variable, Type, Template, Local } from "dalkak";

import basic from "@dalkak/basic";

let project = toDalk(test);

const wait = new Block({
    name: "wait",
    template: "{기다리기}",
    func: async () => {
        await new Promise(
            o => {
                setTimeout(o, 100);
            }
        );
    }
});

const log = new Block({
    name: "log",
    template: "{(val)을 출력하기}",
    func: ({val}, project, local) => {
        
        console.log("val", val);
    }
});

const get = new Block({
    name: "get",
    template: "((name) 값)",
    func: ({name}, project, local) => {
        //console.log(local.variables.value[name][0].scope, local.scope)
        console.log(local.variables.value[name][0].scope.compare(local.scope))
        const variable = local.getVariable(name);
        return variable.value // ?? (variable.value = 0);
    }
});
// project.variables.value.vv = new Variable({name: "vv", type: Template.typeFromBracket("(")}); // 프로젝트에 글로벌 변수를 추가. 안하면 로컬에서만 유효.

get.setParam("name", Literal.from("vv"))
log.setParam("val", get)
project.thingGroup.children[0].blockGroups[0] =
project.thingGroup.children[0].blockGroups[0].attach(BlockGroup.fromBlock(log));
project.thingGroup.children[0].addBlock(
    BlockGroup.fromBlock(wait)
    .attach(BlockGroup.fromBlock(log))
)
project.run();
setTimeout(async () => {
    console.log("global", project.variables.value.vv?.value);
}, 1000);