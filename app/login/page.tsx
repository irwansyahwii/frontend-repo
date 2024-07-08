import { ClientSide } from "@/components/client.side";
import LoginForm from "@/components/login.form";
import CssBaseline from "@mui/joy/CssBaseline";
import Image from "next/image";


export default function Login() {
  return (
    <ClientSide>
      <main >
        <CssBaseline />
        <LoginForm/>

      </main>
    </ClientSide>
  );
}
