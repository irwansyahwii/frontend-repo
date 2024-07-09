import { getCurrentUser } from "@/apis/server-side/getCurrentUser";
import EditUser from "@/components/edit.user";


export default async function MainPage() {
  const currentUser =  await getCurrentUser();
  return (
              
    <EditUser userToEdit={currentUser}/>
    
  );
}


