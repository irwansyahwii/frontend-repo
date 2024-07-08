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
import Snackbar, { snackbarClasses } from '@mui/joy/Snackbar';
import { delay } from "@/utils/delay";






const mapState = (state: RootState) => ({
  auth: state.auth,
  loading: state.loading.models.auth
})


const LoginForm = (props: any) => {
  const [snackBarMessage, setSnackBarMessage] = useState<{color: "success" | "danger", message: string}>({color:"success", message: ""});
  const theme: ThemeSpec = useTheme() as any;
  
  const {auth, dispatch, loading}:{loading: boolean, auth: AuthState, dispatch: RematchDispatch<RootModel>} = props;

  const router = useRouter();
  const doSignIn = async ()=>{
    try{
      await dispatch.auth.loginWithGoogle();    
    }catch{
      setSnackBarMessage({color: "danger", message: "Login failed!"});
    }    
  }

  const navigateToDashboard = useCallback(async ()=>{
    await delay(800);
    router.replace('/dashboard');
  },[router]);

  useEffect(()=>{
    if(auth.isLoggedIn){
      setSnackBarMessage({color: "success", message:"You have successfully logged in!"});
      navigateToDashboard();
    }
  }, [router, auth.isLoggedIn, navigateToDashboard]);
  return (
    <>
      <Snackbar autoHideDuration={800} 
        variant="solid"
        onClose={() => {
          setSnackBarMessage({...snackBarMessage, message: ""})
        }}      
        color={snackBarMessage.color} anchorOrigin={{vertical: 'top', horizontal: 'center'}} 
        open={snackBarMessage.message.length > 0} >{snackBarMessage.message}</Snackbar>

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