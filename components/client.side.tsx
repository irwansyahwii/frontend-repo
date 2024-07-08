'use client';

import { theme } from "@/app/theme";
import CssBaseline from "@mui/joy/CssBaseline"
import { CssVarsProvider, extendTheme } from "@mui/joy/styles"

export const ClientSide = ({
  children,  
}: Readonly<{
  children: React.ReactNode;
}>)=>{
  return (
    <CssVarsProvider theme={extendTheme(theme)} >
      <CssBaseline />
      {children}
    </CssVarsProvider>

  )
}