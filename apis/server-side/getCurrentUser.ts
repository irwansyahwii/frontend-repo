// enforces that this code can only be called on the server
// https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#keeping-server-only-code-out-of-the-client-environment
import "server-only";

import { cookies } from "next/headers";


export const getCurrentUser = async () => {
  const cookieStore = cookies();

  console.log(cookieStore.get("token"));

  return null;
}