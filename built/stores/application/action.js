"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const dependency_inject_1 = require("dependency-inject");
const dob_1 = require("dob");
const store_1 = require("./store");
class ApplicationAction {
    updateAppName(name) {
        this.applicationStore.appName = name;
    }
}
__decorate([
    dependency_inject_1.inject(store_1.default),
    __metadata("design:type", store_1.default)
], ApplicationAction.prototype, "applicationStore", void 0);
__decorate([
    dob_1.Action,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ApplicationAction.prototype, "updateAppName", null);
exports.default = ApplicationAction;
//# sourceMappingURL=action.js.map