import { UserInfo } from "@/store/models/user";
import { AuthApi } from "../authApi";
import { delay } from "@/utils/delay";

export class DummyAuthApi implements AuthApi {
  logout(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  currentUser: UserInfo | null = null


  async loginWithGoogle(): Promise<void> {
    
    await delay(1000);    
    
    this.currentUser = {
      email: 'dummy@dummy.com',
      fullName: 'Dummy Name',
      id: 'dummy-id',      
    };
    
    return;
  }
  async checkLoggedIn(): Promise<UserInfo | null> {
    await delay(1000);
    
    return this.currentUser;
  }
}