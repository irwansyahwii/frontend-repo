'use client';

import { UserInfo } from "@/store/models/user";
import {parseCookies} from "nookies";

const UPDATE_USER_DATA_URL = "http://localhost:8000/update-user-data"

export class UserApi {
  public async updateUserData(user: UserInfo): Promise<any>{
    try {
      const cookies = parseCookies();

      const idToken = cookies["token"] || "";
      console.log("JJJJ")
      console.log("user:", user);
      const response = await fetch(UPDATE_USER_DATA_URL,  {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${idToken}`
        }
      });

      console.log("ADAD")

      // if(!response.ok){
      //   console.log("BBB")
      //   return {error: await response.json()};
      // }

      const data = response.json();

      

      return data;
      
    } catch (error) {
      
      console.log(error + "")      
      throw new Error(error + "");
    }
  }
}