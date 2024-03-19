import styled, { createGlobalStyle } from 'styled-components';
import { COLORS, DEVICE, SPACES } from '../theme';

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ul[class],
  ol[class] {
    padding: 0;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  p,
  ul[class],
  ol[class],
  li,
  figure,
  figcaption,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  body {
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    min-height: 100vh;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    background-color: ${COLORS.black};
    color: ${COLORS.white}
  }

  ul[class],
  ol[class] {
    list-style: none;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img {
    max-width: 100%;
    display: block;
  }

  article > * + * {
    margin-top: 1em;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    border: none;
    outline: none;
    background: transparent;
  }
  `;

export const StyledContainer = styled.div`
  display: flex;
  margin: ${SPACES.lg};
  min-height: calc(100vh - 80px);
  position: relative;

  @media ${DEVICE.sidebar} {
    margin: 0;
    min-height: 100vh;
  }
`;
