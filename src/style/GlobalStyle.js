import React from "react";
import { Global, css, useTheme } from "@emotion/react";

const setGlobalStyles = () => css`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css); 

  ::-webkit-scrollbar {
    max-width: 40px;
    height: 10px;
    width: 5px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-corner {
    background-color: #222127;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #434343;
    border-radius: 3px;
    background-clip: padding-box;
    border: 1px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #555556;
    background-color: transparent;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    /* font-family: "Roboto", sans-serif; */
  }
  body {
    padding: 0;
    margin: 0;
    overflow: auto;
    /* height: 100vh; */
    height: calc(var(--vh, 1vh) * 100);
    background-color: white;
    color: black;
  }
  #root {
    height: 100%;
    width: 100%;
  }
  button {
    cursor: pointer;
    border: 0;
    outline: 0;
    outline: none;
  }
  input {
    outline: none;
    border: 0;
  }
  select {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: 0;
    outline: 0;
  }
`;

const GlobalStyle = () => {
  const theme = useTheme();
  return <Global styles={setGlobalStyles(theme)} />;
};

export default GlobalStyle;
