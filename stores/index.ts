import { injectFactory } from "dependency-inject";

import ApplicationAction from "./application/action";
import ApplicationStore from "./application/store";

import CountAction from "./count/action";
import CountStore from "./count/store";

export default injectFactory({
  ApplicationAction,
  ApplicationStore,
  CountAction,
  CountStore
});

export interface IStore {
  ApplicationAction?: ApplicationAction
  ApplicationStore?: ApplicationStore
  CountAction?: CountAction
  CountStore?: CountStore
}
