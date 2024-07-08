import "server-only";

import { cookies, headers } from "next/headers";
import { initializeServerApp } from "firebase/app";

import { getAuth } from "firebase/auth";
import { firebaseConfig } from "../firebase/config";

export async function getAuthenticatedAppForUser() {
  const cookieStore = cookies();
  const tokenCookie = cookieStore.get("token");

  if(tokenCookie){
    const idToken = tokenCookie.value;
    console.log("idToken", idToken);
    const firebaseServerApp = initializeServerApp(
      firebaseConfig,
      idToken
        ? {
            authIdToken: idToken,
          }
        : {}
    );

    const auth = getAuth(firebaseServerApp);
    await auth.authStateReady();

    return auth.currentUser;
  }

  return null;
}

export const isStillLoggedIn = async ()=> {
  const currentUser = await getAuthenticatedAppForUser();
  return (currentUser != null);
}