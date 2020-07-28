import React, { useEffect } from 'react';
import styled from 'styled-components';

import { keyframes } from '../../styles';

const StyledWrapper = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;

const StyledEmoji = styled.span`
  animation: ${keyframes.beat(1.07)} 1s infinite
    cubic-bezier(0.215, 0.61, 0.355, 1);
  font-size: 5.5em;
  margin-bottom: 60px;
`;

const LoadingScreen = () => {
  useEffect(() => {
    document.querySelector('.app').style.filter = 'blur(5px)';

    return () => {
      document.querySelector('.app').style.filter = 'none';
    };
  }, []);

  return (
    <StyledWrapper>
      {/* eslint-disable jsx-a11y/accessible-emoji */}
      {/* I disable this rule since StyledEmoji is already a <span> */}
      <StyledEmoji aria-label="Emoji de casa" role="img">
        🏡
      </StyledEmoji>
    </StyledWrapper>
  );
};

export default LoadingScreen;
