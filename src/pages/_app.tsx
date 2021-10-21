import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { ConfigProvider } from "antd";
import "antd/dist/antd.variable.min.css";
import "antd/dist/antd.dark.css";
import { THEME } from "@/util/constant";
import { Context } from "@/component";

// https://stackblitz.com/edit/antd-dark-mode-toggle-example?file=App.tsx

const stylesheets = {
  [THEME.LIGHT]:
    "https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.0-alpha.7/antd.min.css",
  [THEME.DARK]:
    "https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.0-alpha.7/antd.dark.min.css",
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

  useEffect(() => {
    ConfigProvider.config({
      theme: {
        primaryColor: "#25b864",
      },
    });
  }, [theme]);

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
