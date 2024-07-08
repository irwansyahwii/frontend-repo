import Image from "next/image";

import LoginForm from "@/components/login.form";
import { getCurrentUser } from "@/apis/server-side/getCurrentUser";
import { redirect } from "next/navigation";
import { isStillLoggedIn } from "@/apis/server-side/isStillLoggedIn";

export default async function Home({params}: {params: string}) {
  const isLoggedIn = await isStillLoggedIn();
  if(!isLoggedIn){
    redirect('/login');
  }else{
    redirect('/dashboard');
  }
}
