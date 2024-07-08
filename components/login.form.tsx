'use client';

import { AuthState } from "@/store/models/auth";
import { RootState } from "@/store/store";
import { connect } from "react-redux";
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';

import { RootModel } from "@/store/models";
import { RematchDispatch } from "@rematch/core";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useTheme } from '@mui/joy/styles';
import { ThemeSpec } from "@/theme/theme.spec";



const mapState = (state: RootState) => ({
  auth: state.auth
})


const LoginForm = (props: any) => {
  
  const theme: ThemeSpec = useTheme() as any;
  
  const {auth, dispatch}:{auth: AuthState, dispatch: RematchDispatch<RootModel>} = props;

  const router = useRouter();
  const doSignIn = async ()=>{
    await dispatch.auth.loginWithGoogle();

    
  }

  useEffect(()=>{
    if(auth.isLoggedIn){
      router.replace('/dashboard');
    }
  }, [router, auth.isLoggedIn]);
  return (
    
    <Sheet
      sx={theme.loginForm.sheet}
      variant={theme.loginForm.sheet.variant}
    >
      <div>
        <Typography level={theme.loginForm.caption.heading} component={theme.loginForm.caption.heading}>
          <b>Welcome!</b>
        </Typography>
        <Typography level={theme.loginForm.instruction.heading}>Sign in to continue.</Typography>
      </div>
      <Button onClick={doSignIn} variant={theme.loginForm.signInButton.variant} sx={theme.loginForm.signInButton}>Sign in with Google</Button>
    </Sheet>      

  )
}

export default connect(mapState, null)(LoginForm);