import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import NextNProgress from "nextjs-progressbar";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";
import NavigationBar from "../src/components/NavigationBar/NavigationBar";

import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";

TimeAgo.addLocale(en);

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <NextNProgress />
        <NavigationBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
