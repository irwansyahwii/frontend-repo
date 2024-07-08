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
import { useCallback, useEffect, useState } from "react";
import { useTheme } from '@mui/joy/styles';
import { ThemeSpec } from "@/theme/theme.spec";
import Snackbar from '@mui/joy/Snackbar';
import { delay } from "@/utils/delay";






const mapState = (state: RootState) => ({
  auth: state.auth,
  loading: state.loading.models.auth
})


const LoginForm = (props: any) => {
  const [snackBarMessage, setSnackBarMessage] = useState<string>("");
  const theme: ThemeSpec = useTheme() as any;
  
  const {auth, dispatch, loading}:{loading: boolean, auth: AuthState, dispatch: RematchDispatch<RootModel>} = props;

  const router = useRouter();
  const doSignIn = async ()=>{
    await dispatch.auth.loginWithGoogle();    
  }

  const navigateToDashboard = useCallback(async ()=>{
    await delay(800);
    router.replace('/dashboard');
  },[router]);

  useEffect(()=>{
    if(auth.isLoggedIn){
      setSnackBarMessage("You have successfully logged in!");
      navigateToDashboard();
    }
  }, [router, auth.isLoggedIn, navigateToDashboard]);
  return (
    <>
      <Snackbar anchorOrigin={{vertical: 'top', horizontal: 'center'}} open={snackBarMessage.length > 0} >{snackBarMessage}</Snackbar>
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
        <Button loading={loading} onClick={doSignIn} variant={theme.loginForm.signInButton.variant} sx={theme.loginForm.signInButton}>Sign in with Google</Button>
      </Sheet>      
    </>

  )
}

export default connect(mapState, null)(LoginForm);