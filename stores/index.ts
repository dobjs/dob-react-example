import { combineStores } from "dob";

import ApplicationAction from "./application/action";
import ApplicationStore from "./application/store";

import CountAction from "./count/action";
import CountStore from "./count/store";

const stores = {
  ApplicationAction,
  ApplicationStore,
  CountAction,
  CountStore
}

export default combineStores(stores);

type Partial<T> = {
  [P in keyof T]?: T[P];
}

export type IStore = Partial<typeof stores>
