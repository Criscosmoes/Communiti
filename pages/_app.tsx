import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import NextNProgress from "nextjs-progressbar";
import { isAuthenticated } from "../src/hooks/isAuthenticated";

export default function App({ Component, pageProps }: AppProps) {
  const user = isAuthenticated();
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
