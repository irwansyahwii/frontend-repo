import Image from "next/image";

import LoginForm from "@/components/login.form";
import { getCurrentUser } from "@/apis/server-side/getCurrentUser";
import { redirect } from "next/navigation";

export default async function Home({params}: {params: string}) {
  const currentUser = await getCurrentUser();
  if(!currentUser){
    redirect('/login');
  }else{
    redirect('/dashboard');
  }
}
