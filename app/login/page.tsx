import LoginForm from "@/components/login.form";
import Image from "next/image";
import styles from "./page.module.css";

export default function Login() {
  return (
    <main className={styles.main}>

      <LoginForm/>

    </main>
  );
}
