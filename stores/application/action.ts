import { Action, inject } from "dob";
import ApplicationStore from "./store";

export default class ApplicationAction {
  @inject(ApplicationStore)
  private applicationStore: ApplicationStore;

  @Action public async updateAppName(name: string) {
    this.applicationStore.appName = name;
  }
}
