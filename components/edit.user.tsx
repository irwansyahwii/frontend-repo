'use client';

import { RootState } from "@/store/store";
import { connect } from "react-redux";
import UserProfile from "./user.profile";
import { UserInfo, UserState } from "@/store/models/user";
import { auth } from "@/apis/firebase/clientApp";
import { RematchDispatch } from "@rematch/core";
import { RootModel } from "@/store/models";
import { useEffect } from "react";

const mapState = (state: RootState) => ({
  auth: state.auth,
  user: state.user,
  loading: state.loading.models.user
})

const EditUser = (props: any)=>{

  const {user, userToEdit, dispatch}: {user: UserState, userToEdit: UserInfo | null, dispatch: RematchDispatch<RootModel>} = props;
  
  useEffect(()=>{
    
    dispatch.user.setCurrentUser(userToEdit);
    
  }, [userToEdit, dispatch.user])

  return (
    <UserProfile/>
  )

}

export default connect(mapState, null)(EditUser);