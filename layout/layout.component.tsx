import * as React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Props, State } from "./layout.type";

import Count from "../pages/count/count.component";
import Home from "../pages/home/home.component";

export default class Layout extends React.PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <div>
        <div>
          <Link to="/">首页</Link>
          <Link to="/count">Count</Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/count" component={Count} />
        </Switch>
      </div>
    );
  }
}
