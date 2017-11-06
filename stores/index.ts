import { combineStores } from "dob";

import ApplicationAction from "./application/action";
import ApplicationStore from "./application/store";

import CountAction from "./count/action";
import CountStore from "./count/store";

export default combineStores({
  ApplicationAction,
  ApplicationStore,
  CountAction,
  CountStore
})
