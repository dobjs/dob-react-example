"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const dob_react_1 = require("dob-react");
const React = require("react");
const react_helper_1 = require("../../utils/react-helper");
const home_type_1 = require("./home.type");
let Home = class Home extends react_helper_1.PureComponent {
    constructor() {
        super(...arguments);
        this.state = new home_type_1.State();
        this.handleChange = (event) => {
            this.props.ApplicationAction.updateAppName(event.currentTarget.value);
        };
    }
    render() {
        return (React.createElement("div", null,
            this.props.ApplicationStore.appName,
            React.createElement("input", { onChange: this.handleChange, value: this.props.ApplicationStore.appName })));
    }
};
Home.defaultProps = new home_type_1.Props();
Home = __decorate([
    dob_react_1.Connect
], Home);
exports.default = Home;
//# sourceMappingURL=home.component.js.map