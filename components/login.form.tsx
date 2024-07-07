'use client';

import { AuthState } from "@/store/models/auth";
import { RootState } from "@/store/store";
import { connect } from "react-redux";

const mapState = (state: RootState) => ({
  auth: state.auth
})


const LoginForm = ({auth}:{auth: AuthState}) => {
  console.log('auth:', auth);
  // /return (<div>Login {auth.isLoggedIn ? "LOGGED IN" : "NOT LOGGED IN" }</div>)
  return (<div>Login</div>)
}

export default connect(mapState)(LoginForm);