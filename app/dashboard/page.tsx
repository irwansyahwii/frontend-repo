import { ClientSide } from "@/components/client.side";
import EditUser from "@/components/edit.user";
import { RootState } from "@/store/store";
import Image from "next/image";
import { connect } from "react-redux";


export default function MainPage() {
  return (
    <ClientSide>
      <main >

        <EditUser/>

      </main>
    </ClientSide>
  );
}


