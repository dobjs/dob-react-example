import { Connect } from "dob-react";
import * as React from "react";
import { PureComponent } from "../../utils/react-helper";
import { Props, State } from "./count.type";

@Connect
export default class Count extends PureComponent<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return (
      <div>
        count: {this.props.CountStore.count}
        <button onClick={this.handlePlus}>+</button>
        <button onClick={this.handleSubtract}>-</button>
      </div>
    );
  }

  private handlePlus = () => {
    this.props.CountAction.updateCount(this.props.CountStore.count + 1);
  }

  private handleSubtract = () => {
    this.props.CountAction.updateCount(this.props.CountStore.count - 1);
  }
}
