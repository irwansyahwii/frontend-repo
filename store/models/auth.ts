import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { UserInfo } from "./user";
import { getAuthApi } from "@/apis/authApi";


export interface AuthState {
  isLoggedIn: boolean;
}

export const auth = createModel<RootModel>()({
  state: {
    isLoggedIn: false
  } as AuthState,
  reducers:{
    loggedIn:(state: AuthState, payload: UserInfo) => {
      return {...state, isLoggedIn: (payload != null)};
    }
  },
  effects:(dispatch)=>({
    async checkLoggedIn(){

      const authApi = getAuthApi();
      const currentUser = await authApi.checkLoggedIn();
    }    
  })
})

