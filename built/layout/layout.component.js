"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const react_router_dom_2 = require("react-router-dom");
const layout_type_1 = require("./layout.type");
const count_component_1 = require("../pages/count/count.component");
const home_component_1 = require("../pages/home/home.component");
class Layout extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = new layout_type_1.State();
    }
    render() {
        return (React.createElement(react_router_dom_2.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "\u9996\u9875"),
                    React.createElement(react_router_dom_1.Link, { to: "/count" }, "Count")),
                React.createElement(react_router_dom_2.Switch, null,
                    React.createElement(react_router_dom_2.Route, { exact: true, path: "/", component: home_component_1.default }),
                    React.createElement(react_router_dom_2.Route, { exact: true, path: "/count", component: count_component_1.default })))));
    }
}
Layout.defaultProps = new layout_type_1.Props();
exports.default = Layout;
//# sourceMappingURL=layout.component.js.map