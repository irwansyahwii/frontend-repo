'use client';

import nookies from 'nookies';
import { initializeApp, getApps } from "firebase/app";
import { firebaseConfig } from "./config";
import { getAuth, onIdTokenChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);


onIdTokenChanged(auth, async (user)=>{
  console.log("onIdTokenChanged, user:", user);
  if(user){
    const token = await user.getIdToken();
    
    nookies.set(undefined, 'token', token, { path: '/' });
  }else{    
    nookies.set(undefined, 'token', '', { path: '/' });
  }
})