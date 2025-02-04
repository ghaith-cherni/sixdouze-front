import "swiper/css";
import "swiper/css/bundle";
import 'remixicon/fonts/remixicon.css';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'remixicon/fonts/remixicon.css';
import 'react-clock/dist/Clock.css';
import '../../node_modules/boxicons/css/boxicons.min.css';
import '../../styles/front-pages.css';
import "../../styles/control-panel.css";
import "../../styles/left-sidebar-menu.css";
import "../../styles/top-navbar.css";
import "../../styles/crypto-dashboard.css";
import "../../styles/chat.css";
import "../../styles/globals.css";
// globals dark Mode CSS
import "../../styles/dark.css";
// globals RTL Mode CSS
import "../../styles/rtl.css";

import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import LayoutProvider from "@/providers/LayoutProvider";

export const metadata = {
  title: "Trezo - React Nextjs 15+ Material Design Admin Dashboard Template",
  description: "React Nextjs 15+ Material Design Admin Dashboard Template",
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            <LayoutProvider>{props.children}</LayoutProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
