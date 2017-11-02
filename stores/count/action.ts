import { Action, inject } from "dob";
import ApplicationStore from "./store";

export default class ApplicationAction {
  @inject(ApplicationStore)
  private applicationStore: ApplicationStore;

  /**
   * 修改计数器
   */
  @Action public updateCount(count: number) {
    this.applicationStore.count = count;
  }
}
