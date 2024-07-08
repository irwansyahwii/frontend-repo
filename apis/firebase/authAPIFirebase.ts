'use client';


import { UserInfo } from "@/store/models/user";
import { AuthApi } from "../authApi";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "./clientApp";
import { error } from "console";

export class FirebaseAuthApi implements AuthApi {

  logout(): Promise<void> {
    return auth.signOut();
  }

  async getCurrentUser():Promise<UserInfo | null>{
    return new Promise((resolve, reject)=>{
      auth.onAuthStateChanged((currentUser)=>{
        if(!currentUser){
          resolve(null);
        }else{
          resolve(
            {
              email: currentUser.email || "",
              fullName: currentUser.displayName || "",
              id: currentUser.uid
            }

          )
        }
      }, ()=>{
        resolve(null);
      });
    })
  }

  async checkLoggedIn(): Promise<UserInfo | null> {
    
    let userInfo: UserInfo | null = await this.getCurrentUser();
    console.log(userInfo);

    return userInfo;
  }

  async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.log(error);
    }
    
  }

}