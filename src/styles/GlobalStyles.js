import { createGlobalStyle } from 'styled-components';

import transitions from './transitions';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #f5f5f5;
    color: #303030;
    font-family: RobotoRegular;
    font-size: 18px;
    margin: 0;
  }

  a {
    color: #4586f4;
    display: inline-block;
    font-weight: bold;
    text-decoration: none;
    transition: transform ${transitions.speed.superfast} linear;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &:active {
      transform: translateY(1px);
    }
  }

  hr {
    border: 0;
    border-radius: 10px;
    background-color: #dddddd;
  }

  p {
    margin: 0;
  }
`;
