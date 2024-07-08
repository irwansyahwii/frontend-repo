
import { UserInfo } from "@/store/models/user";
import { FirebaseAuthApi } from "./firebase/authAPIFirebase";
import { DummyAuthApiNotLoggedIn } from "./dummies/DummyAuthApiNotLoggedIn";
import { DummyAuthApi } from "./dummies/DummyAuthApi";

export interface AuthApi {
  checkLoggedIn(): Promise<UserInfo | null>;
  loginWithGoogle():Promise<void>;
  logout():Promise<void>;
}

const apiMap = new Map<string, AuthApi>();

apiMap.set('DummyAuthApi', new DummyAuthApi());
apiMap.set('DummyAuthApiNotLoggedIn', new DummyAuthApiNotLoggedIn());
apiMap.set("FirebaseAuthApi", new FirebaseAuthApi())

export const getAuthApi = ()=>{

  const apiInstance = apiMap.get(process.env.NEXT_PUBLIC_AUTH_API || "") || null;
  if(!apiInstance){
    throw new Error('Please configure NEXT_PUBLIC_AUTH_API in env vars');
  }

  return apiInstance;
}