'use client';


import { UserInfo } from "@/store/models/user";
import { AuthApi } from "../authApi";
import {
  GoogleAuthProvider,
  onAuthStateChanged as _onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "./clientApp";

export class FirebaseAuthApi implements AuthApi {

  logout(): Promise<void> {
    console.log("Signing out from firebase");
    return auth.signOut();
  }

  async getCurrentUser():Promise<UserInfo | null>{
    return new Promise((resolve, reject)=>{
      auth.onAuthStateChanged((currentUser)=>{
        
        console.log("onAuthStateChanged, currentUSer:", currentUser);

        if(!currentUser){
          resolve(null);
        }else{
          resolve(
            {
              email: currentUser.email || "",
              firstName : currentUser.displayName || "",
              lastName: "",
              id: currentUser.uid,
              role: "",
              country: "Indonesia"
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
    

    return userInfo;
  }

  async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
    
  }

}