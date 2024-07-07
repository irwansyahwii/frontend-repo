import Image from "next/image";
import styles from "./page.module.css";
import LoginForm from "@/components/login.form";

export default function Home() {
  return (
    <main className={styles.main}>

      <LoginForm/>

    </main>
  );
}
