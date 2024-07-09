// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import "server-only";

import { cookies } from "next/headers";
import { UserInfo } from "@/store/models/user";


const FETCH_USER_DATA_URL = "http://localhost:8000/fetch-user-data"


export const getCurrentUser = async (): Promise<UserInfo | null> => {
  try {
    const cookieStore = cookies();

    const tokenCookie =  cookieStore.get("token");
    if(tokenCookie){
      const idToken = tokenCookie.value;
      const response = await fetch(FETCH_USER_DATA_URL, {
        headers:{
          "Content-Type": "application/json",
          "Authorization": `Bearer ${idToken}`
        }
      })

      const data = await response.json();

      console.log("data:", data);

      return data;
    }  
    
  } catch (error) {
    
  }

  return null;
}