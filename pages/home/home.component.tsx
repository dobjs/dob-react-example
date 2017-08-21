import { Connect } from "dob-react";
import * as React from "react";
import { PureComponent } from "../../utils/react-helper";
import { Props, State } from "./home.type";

@Connect
export default class Home extends PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <div>
        {this.props.ApplicationStore.appName}
        <input onChange={this.handleChange} value={this.props.ApplicationStore.appName} />
      </div>
    );
  }

  private handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    this.props.ApplicationAction.updateAppName(event.currentTarget.value);
  }
}
