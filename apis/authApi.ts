
import { UserInfo } from "@/store/models/user";
import { delay } from "@/utils/delay";

export interface AuthApi {
  checkLoggedIn(): Promise<UserInfo | null>;
}

export const getAuthApi = ()=>{
  const apiMap = new Map<string, AuthApi>();
  apiMap.set('DummyAuthApi', new DummyAuthApi());
  apiMap.set('DummyAuthApiNotLoggedIn', new DummyAuthApiNotLoggedIn());

  const apiInstance = apiMap.get(process.env.NEXT_PUBLIC_AUTH_API || "") || null;
  if(!apiInstance){
    throw new Error('Please configure NEXT_PUBLIC_AUTH_API in env vars');
  }

  return apiInstance;
}

class DummyAuthApi implements AuthApi {
  async checkLoggedIn(): Promise<UserInfo | null> {
    await delay(1000);
    return ({
      email: 'dummy@dummy.com',
      fullName: 'Dummy Name',
      id: 'dummy-id',      
    });
  }
}

class DummyAuthApiNotLoggedIn implements AuthApi {
  async checkLoggedIn(): Promise<UserInfo | null> {
    await delay(1000);
    return null;
  }

}