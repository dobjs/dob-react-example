"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dependency_inject_1 = require("dependency-inject");
const action_1 = require("./application/action");
const store_1 = require("./application/store");
const action_2 = require("./count/action");
const store_2 = require("./count/store");
exports.default = dependency_inject_1.injectFactory({
    ApplicationAction: action_1.default,
    ApplicationStore: store_1.default,
    CountAction: action_2.default,
    CountStore: store_2.default
});
//# sourceMappingURL=index.js.map