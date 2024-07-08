
import { UserInfo } from "@/store/models/user";
import { delay } from "@/utils/delay";

export interface AuthApi {
  checkLoggedIn(): Promise<UserInfo | null>;
  loginWithGoogle():Promise<void>;
}

const apiMap = new Map<string, AuthApi>();

export const getAuthApi = ()=>{

  const apiInstance = apiMap.get(process.env.NEXT_PUBLIC_AUTH_API || "") || null;
  if(!apiInstance){
    throw new Error('Please configure NEXT_PUBLIC_AUTH_API in env vars');
  }

  return apiInstance;
}

class DummyAuthApi implements AuthApi {
  currentUser: UserInfo | null = null


  async loginWithGoogle(): Promise<void> {
    throw new Error("adasd");
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

class DummyAuthApiNotLoggedIn implements AuthApi {
  async loginWithGoogle(): Promise<void> {
    await delay(1000);
    return;
  }
  async checkLoggedIn(): Promise<UserInfo | null> {
    await delay(1000);
    return null;
  }

}

apiMap.set('DummyAuthApi', new DummyAuthApi());
apiMap.set('DummyAuthApiNotLoggedIn', new DummyAuthApiNotLoggedIn());
