import { observable, Static } from "dob";

@observable
export default class CountStore {
  /**
   * 计数
   */
  public count = 0;
}
