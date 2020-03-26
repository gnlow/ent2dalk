import toDalk from "./index";

import test from "./kachi_test_project";
import { Local } from "dalkak";

const project = toDalk(test as any);
    //console.log(project.thingGroup.children[0].blockGroups[0].blocks[1].paramTypes.value.ev.fromString("msg", project, new Local));
    //console.log(project.events.value)

project.run();