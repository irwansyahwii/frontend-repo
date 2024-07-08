'use client';

import { RootState } from "@/store/store";
import { connect } from "react-redux";
import UserProfile from "./user.profile";

const mapState = (state: RootState) => ({
  auth: state.auth
})

const EditUser = (props: any)=>{
  console.log('props.auth.prev:', props.auth.prev)
  return (
    <UserProfile/>
  )

}

export default connect(mapState, null)(EditUser);