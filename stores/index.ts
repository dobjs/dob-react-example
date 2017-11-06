import { combineStores } from "dob";

import ApplicationAction from "./application/action";
import ApplicationStore from "./application/store";

import CountAction from "./count/action";
import CountStore from "./count/store";

const store = combineStores({
  ApplicationAction,
  ApplicationStore,
  CountAction,
  CountStore
})

export default store
export type IStore = typeof store
