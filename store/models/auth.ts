import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { UserInfo } from "./user";
import { getAuthApi } from "@/apis/authApi";
import { delay } from "@/utils/delay";


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
    },
    logout(state: AuthState){
      return {...state, isLoggedIn: false};
    }
  },
  effects:(dispatch)=>({
    async loginWithGoogle(){
      
      const authApi = getAuthApi();
      
      await authApi.loginWithGoogle();
      
      await dispatch.auth.checkLoggedIn();
      
    },
    async checkLoggedIn(){
      
      const authApi = getAuthApi();
      
      const currentUser = await authApi.checkLoggedIn();
      
      dispatch.auth.loggedIn(currentUser!);
      
    }    
  })
})

