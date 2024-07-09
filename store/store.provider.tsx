"use client";
//TODO: We have to disabled this first before finding out the compatibility with rematch.js
// import { setupListeners } from "@reduxjs/toolkit/query";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { store, Store } from "./store";
import { UserInfo } from "./models/user";

interface Props {
  readonly children: ReactNode;
  currentUser: UserInfo | null;
}

export const StoreProvider = ({ children, currentUser }: Props) => {
  const storeRef = useRef<Store | null>(null);

  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = store;
  }

  if(currentUser){
    storeRef.current.dispatch.auth.loggedIn(currentUser);
  }
  

  /* TODO: We have to disabled this first before finding out the compatibility with rematch.js
  useEffect(() => {
    if (storeRef.current != null) {
      // configure listeners using the provided defaults
      // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
      const unsubscribe = setupListeners(storeRef.current.dispatch);
      return unsubscribe;
    }
  }, []);
  */

  return <Provider store={storeRef.current}>{children}</Provider>;
};