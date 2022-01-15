import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--text-font) !important;
    font-size: 60%;
    width: 100%;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    
    @media only screen and (max-width: 1400px) {
      font-size: 60%;
    }

    @media only screen and (min-width: 1400px) {
      font-size: 62.5%;
    }
  }

  * {
    box-sizing: border-box;
  }

  /* thay đổi màu mặc định khi kéo chọn vùng chữ của trình duyệt */
  ::selection {
    background: var(--color-primary) !important;
  }

  ::-moz-selection { /* Code for Firefox */
    background: var(--color-primary) !important;
  }

  /* https://stackoverflow.com/questions/4472891/how-can-i-disable-zoom-on-a-mobile-web-page */
  :root {
    --text-font: Montserrat, sans-serif;
    --text-font-secondary: "Open Sans", sans-serif;
    --color-text: #383c40;
    --color-text-secondary: #6E6B7B;
    --color-primary: rgba(79, 70, 229, 1);
    --color-primary-light: #867ae9;
    --color-text-white-light: rgb(242, 242, 230);
    --color-text-white: rgb(255, 255, 255);
    --color-secondary: #ff7600;
    --color-gray: #6e6b7b;
    --color-background: #f2f2f2;
    --color-background-dark: rgba(48, 48, 48, 0.4);
    --color-background-gray: rgba(32, 32, 32, 0.8);
    --color-background-primary: rgba(133,122,233,0.15);
    --box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    --box-shadow-large: 0px 0px 20px rgba(0, 0, 0, 0.1);
    --border-radius: 0.6rem;
    --border-radius-1: 1rem;
    --padding: 1.5rem 2rem;
    --padding-small: 1.5rem 1.5rem;
    --padding-page: 2rem 3rem;
    --padding-page-small: 2rem 1.5rem;
    --margin-bottom: 1.5rem;
    --margin-bottom-small: 1rem;
    --margin-bottom-large: 2.5rem;
    --margin-right: 1.5rem;
    --margin-left: 1.5rem;
    --margin-top: 1.5rem;
    --margin-top-large: 2rem;
    --color-blue-light: #eaf4ff;
    --color-orange-light: #ffefe0;
    --color-border-light: #f5f5f5de;
    --color-border: #e8e8e8;
    --color-orange-red: #FF6767;
    --color-pink: rgb(145, 107, 191);
    --color-success: #7FC8A9;
    --color-error: #FF6767;
    --color-yellow: #FFF47D;
    --color-brown: rgb(197, 104, 36);
    --color-blue: rgb(92, 122, 234);
    --background-success: rgba(127, 200, 169, 0.2);
    --background-error: rgba(255, 103, 103, 0.2);
    --background-yellow: rgba(255, 244, 125, 0.2);
    --background-pink: rgb(145, 107, 191, 0.2);
    --background-primary: rgba(79, 70, 229, 0.07);
    --background-blue: rgb(92, 122, 234, 0.2);
    --background-brown: rgb(197, 104, 36, 0.2);
    --background-dark-light: rgba(0, 0, 0, 0.15);

    --white: #FFF;
    --green: #16BF78;
    --grey-light: #CDD9ED;
    --grey-dark: #3F4656;
    --primary-light: #7699FF;
    --dark: #1C212E;
    --sand-light: #EDD9A9;
    --sand: #DCB773;
  }
`;

export { GlobalStyle };
