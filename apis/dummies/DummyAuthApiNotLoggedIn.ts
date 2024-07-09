import { delay } from "@/utils/delay";

import { AuthApi } from "../authApi";
import { UserInfo } from "@/store/models/user";

export class DummyAuthApiNotLoggedIn implements AuthApi {
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async loginWithGoogle(): Promise<void> {
    await delay(1000);
    return;
  }
  async checkLoggedIn(): Promise<UserInfo | null> {
    await delay(1000);
    return null;
  }

}