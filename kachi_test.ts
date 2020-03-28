import toDalk from "./index";

import test from "./kachi_test_project";

const {project, idList} = toDalk(test as any);

project.run({
    Entry: {
        project: test as any,
        idList
    },
    backend: {
        port: Number(process.env.PORT) || 8080,
    }
});