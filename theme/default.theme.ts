import { CssVarsThemeOptions } from "@mui/joy/styles";
import { ThemeSpec } from "./theme.spec";

export const DefaultTheme: ThemeSpec = {
  loginForm: {
    sheet: {
      variant: 'outline',
      width: 300,
      mx: 'auto', // margin left & right
      my: 30, // margin top & bottom
      py: 3, // padding top & bottom
      px: 2, // padding left & right
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      borderRadius: 'sm',
      boxShadow: 'md',
    },
    caption: {
      heading: "h4"
    },
    instruction: {
      heading: "body-sm"
    },
    signInButton: {
      mt: 1,
      color: "primary",
      variant: "solid"      
    }
  }
}
