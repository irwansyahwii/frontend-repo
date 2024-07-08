'use client';

import { RootState } from "@/store/store";
import { connect } from "react-redux";

const mapState = (state: RootState) => ({
  auth: state.auth
})

const EditUser = (props: any)=>{
  console.log('props.auth.prev:', props.auth.prev)
  return (
    <div>Main Page {props.auth.prev}</div>
  )

}

export default connect(mapState, null)(EditUser);