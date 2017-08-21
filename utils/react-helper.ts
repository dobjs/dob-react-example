import * as React from "react";
import { RouteComponentProps } from "react-router-dom";
import Store, { IStore } from "../stores";

export class PureComponent<T, P> extends React.PureComponent<RouteComponentProps<any> & IStore & T, P> {

}
