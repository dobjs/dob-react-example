import { inject } from "dependency-inject";
import { Action } from "dob";
import ApplicationStore from "./store";

export default class ApplicationAction {
  @inject(ApplicationStore)
  private applicationStore: ApplicationStore;

  @Action public updateAppName(name: string) {
    this.applicationStore.appName = name;
  }
}
