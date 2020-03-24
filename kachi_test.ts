import toDalk from "./index";

import test from "./kachi_test_project";

const project = toDalk(test as any);

project.run();