import * as React from "react"
import store from "../stores";

export class PureComponent<T, P> extends React.PureComponent<typeof store & T, P> {

}
