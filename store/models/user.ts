import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { stat } from "fs";
import { emitWarning } from "process";
import { UserApi } from "@/apis/userApi";

export interface UserInfo{
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    role: string;
    country: string;
}

export interface UserState{
  currentUser:UserInfo | null
}

export const user = createModel<RootModel>()({
  state: {
    currentUser: null
  } as UserState,
  reducers:{
    setCurrentUser:(state: UserState, payload: UserInfo | null): UserState=>{      
      return {...state, currentUser: payload};
    }
  },
  effects:(dispatch)=>({
    async updateUser(user: UserInfo){
      const api  = new UserApi();
      const data= await api.updateUserData(user);
      return data;
    }
  })
})