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



const mapState = (state: RootState) => ({
  auth: state.auth
})


const LoginForm = (props: any) => {
  

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
      sx={{
        width: 300,
        mx: 'auto', // margin left & right
        my: 30, // margin top & bottom
        py: 3, // padding top & bottom
        px: 2, // padding left & right
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRadius: 'sm',
        boxShadow: 'md',
      }}
      variant="outlined"
    >
      <div>
        <Typography level="h4" component="h1">
          <b>Welcome!</b>
        </Typography>
        <Typography level="body-sm">Sign in to continue.</Typography>
      </div>
      <Button onClick={doSignIn} sx={{ mt: 1 /* margin top */ }}>Sign in with Google</Button>
    </Sheet>      

  )
}

export default connect(mapState, null)(LoginForm);