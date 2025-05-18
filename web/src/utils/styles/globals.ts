// src/utils/styles/globals.ts

import { createGlobalStyle } from 'styled-components'

export const Globals = {
  breakpoints: {
    desktop: '1000px',
    tablet: '760px',
    mobile: '500px'
  },
  layout: {
    padding: '20px',
    header: {
      height: '80px'
    },
    hero: {
      card: {
        width: '320px'
      }
    },
    content: {
      maxWidth: '1100px'
    }
  }
}

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 14px;

    @media screen and (min-width: 1024px) {
      font-size: 16px;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    font-family: 'Roboto', sans-serif;
    /* font-family: "Montserrat", sans-serif; */
    /* font-family: "Baloo Paaji 2", sans-serif; */
    /* font-family: "Barlow", sans-serif; */
    /* font-family: "Open Sans", sans-serif; */
    text-decoration: none;
    user-select: none;

    -webkit-tap-highlight-color: transparent !important;
  }

  scroll-behavior: smooth;
`

export default GlobalStyle
