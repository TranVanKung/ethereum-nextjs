import { useState } from "react";
import type { AppProps } from "next/app";
import "antd/dist/antd.dark.css";
import "bulma/css/bulma.min.css";
import { THEME } from "@/util/constant";
import { Context } from "@/component";

// https://stackblitz.com/edit/antd-dark-mode-toggle-example?file=App.tsx

const stylesheets = {
  [THEME.LIGHT]:
    "https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.min.css",
  [THEME.DARK]:
    "https://cdnjs.cloudflare.com/ajax/libs/antd/4.16.13/antd.dark.min.css",
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [theme, setTheme] = useState(THEME.DARK);

  const createStylesheetLink = (): HTMLLinkElement => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.id = "antd-stylesheet";
    document.head.appendChild(link);

    return link;
  };

  const getStylesheetLink = (): HTMLLinkElement =>
    document.head.querySelector("#antd-stylesheet") || createStylesheetLink();

  const onToggleTheme = () => {
    const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
    setTheme(newTheme);
    getStylesheetLink().href = stylesheets[newTheme];
  };

  return (
    <Context.Provider
      value={{
        theme,
        onToggleTheme,
      }}
    >
      <Component {...pageProps} />
    </Context.Provider>
  );
};
export default MyApp;
