import { CloseO as CloseIcon } from 'styled-icons/evil';
import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import { transitions } from '../../styles';

const StyledWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 900;
`;

const StyledCloserOnClick = styled.div`
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
`;

const StyledContent = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 0 4px 17px -5px #000000;
  margin-bottom: 20vh;
  padding: 20px;
  position: relative;

  ${({ width }) =>
    width &&
    `
    width: ${width};
  `}
`;

const StyledCloseIcon = styled(CloseIcon)`
  color: #e14100;
  cursor: pointer;
  right: 15px;
  position: absolute;
  height: 40px;
  top: 15px;
  transition: all ${transitions.speed.superfast} linear;
  width: 40px;

  &:active {
    transform: translateY(2px);
  }
`;

const Modal = ({ children, closeModalHandler, width }) => (
  <StyledWrapper>
    <StyledCloserOnClick onClick={closeModalHandler} />

    <StyledContent width={width}>
      <StyledCloseIcon onClick={closeModalHandler} />
      {children}
    </StyledContent>
  </StyledWrapper>
);

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModalHandler: PropTypes.func.isRequired,
  width: PropTypes.string.isRequired,
};

export default Modal;
