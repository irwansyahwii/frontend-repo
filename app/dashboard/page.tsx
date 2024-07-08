import EditUser from "@/components/edit.user";
import { RootState } from "@/store/store";
import Image from "next/image";
import { connect } from "react-redux";


export default function MainPage() {
  return (
    <main >

      <EditUser/>

    </main>
  );
}


