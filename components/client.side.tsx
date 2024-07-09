'use client';


import { DefaultTheme } from "@/theme/default.theme";
import CssBaseline from "@mui/joy/CssBaseline"
import { CssVarsProvider, extendTheme } from "@mui/joy/styles"

export const ClientSide = ({
  children,  
}: Readonly<{
  children: React.ReactNode;
}>)=>{
  return (
    <CssVarsProvider theme={extendTheme(DefaultTheme)} >
      <CssBaseline />
      {children}
    </CssVarsProvider>

  )
}