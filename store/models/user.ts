import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { stat } from "fs";
import { emitWarning } from "process";

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

export const User = createModel<RootModel>()({
  state: {
    currentUser: null
  } as UserState,
  reducers:{
    setCurrentUser:(state: UserState, payload: UserInfo): UserState=>{      
      return {...state, currentUser: payload};
    }
  }
})