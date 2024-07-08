
export interface ThemeSpec {
  loginForm: {
    sheet: {
      variant: any,
      width: number,
      mx: string,
      my: number,
      py: number,
      px: number,
      display: string,
      flexDirection: string,
      gap: number,
      borderRadius: string,
      boxShadow: string,
    },
    caption:{      
      heading: any,
    },
    instruction:{
      heading: any
    },
    signInButton: {
      mt: number,
      color: string,
      variant: any
    }
  }  
}