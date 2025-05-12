import styled, { createGlobalStyle } from 'styled-components'

import Colors from './colors'
// import Fonts from "../styles/fonts";

export const responsiveDesktop = '1000px'
export const responsiveTablet = '760px'
export const responsiveMobile = '500px'

export const clientHeaderHeight = '70px'

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

  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 10px;
    z-index: 1000;
  }

  ::-webkit-scrollbar-track {
    background: ${Colors.scrollbarTrack};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: ${Colors.scrollbarThumb};
  }
`

export default GlobalStyle

export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  min-height: 100vh;
`
