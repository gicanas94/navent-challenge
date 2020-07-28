import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import { transitions } from '../../styles';

const StyledButton = styled.button`
  background-color: transparent;
  border: 1px solid ${({ color }) => color};
  border-radius: 5px;
  color: ${({ color }) => color};
  font-size: 1em;
  padding: 10px 20px;
  transition: all ${transitions.speed.superfast} linear;

  &:focus {
    outline: none;
  }

  ${({ disabled }) =>
    disabled &&
    `
    color: #dddddd !important;
    border-color: #dddddd !important;
  `}

  ${({ color, disabled }) =>
    !disabled &&
    `
    cursor: pointer;
    
    &:hover,
    &:focus {
      background-color: ${color};
      color: #ffffff;
    }
  `}

  &:active {
    transform: translateY(2px);
  }

  ${({ fullWidth }) =>
    fullWidth &&
    `
    width: 100%;
  `}
`;

const Button = ({ children, ...props }) => (
  <StyledButton {...props}>{children}</StyledButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  fullWidth: false,
};

export default Button;
