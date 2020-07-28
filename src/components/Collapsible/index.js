import { KeyboardArrowDown as ArrowIcon } from 'styled-icons/material';
import PropTypes from 'proptypes';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledArrowIcon = styled(ArrowIcon)`
  color: #929292;
  height: 35px;
  width: 35px;
`;

const StyledHeaderAndIconWrapper = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  ${({ expanded }) =>
    expanded &&
    `
    margin-bottom: 15px;

    ${StyledArrowIcon} {
      transform: rotate(180deg);
    }
  `}
`;

const StyledChildrenWrapper = styled.div`
  width: 100%;
`;

const Collapsible = ({ children, header }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <StyledWrapper>
      <StyledHeaderAndIconWrapper
        expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        {header}
        <StyledArrowIcon />
      </StyledHeaderAndIconWrapper>

      {expanded && <StyledChildrenWrapper>{children}</StyledChildrenWrapper>}
    </StyledWrapper>
  );
};

Collapsible.propTypes = {
  children: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
};

export default Collapsible;
