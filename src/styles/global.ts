import { createGlobalStyle } from 'styled-components';
import lexendBold from '../assets/fonts/Lexend-Bold.ttf';
import lexendRegular from '../assets/fonts/Lexend-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Lexend Bold';
    src: url(${lexendBold}) format('opentype');
  }

  @font-face {
    font-family: 'Lexend Regular';
    src: url(${lexendRegular}) format('opentype');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.colors['grayScale-07']};
  }
  html,
  body,
  #root {
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }
  body,
  input,
  textarea {
    font: 1rem ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors['grayScale-01']};
  }
  h1 {
    font-size: 2rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors['grayScale-01']};
  }
  h2 {
    font-size: 1.5rem;
  }
  button {
    background: transparent;
    border: none;
    transition: filter 0.2s ease;
    cursor: pointer;
    &:hover {
      filter: brightness(1.2);
    }
    &:focus {
      outline: 0px dotted;
      outline: 0px auto -webkit-focus-ring-color;
    }
  }
  input {
    border: none;
    outline: none;
  }
  input[type=number]::-webkit-inner-spin-button,
  input[type=number]::-webkit-outer-spin-button {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
  }
`;
