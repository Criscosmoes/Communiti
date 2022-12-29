import { createTheme, responsiveFontSizes } from "@mui/material/styles"

let theme = createTheme({
  palette: {
    primary: {
      main: '#0277bd',
    },
    secondary: {
      main: '#b2ff59',
    },
    darkGray: {
      main: '#333333'
    },
  },
  typography: {
    fontFamily: 'Ubuntu',
  }
})

theme = responsiveFontSizes(theme)
export default theme