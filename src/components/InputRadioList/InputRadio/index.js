import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

const StyledCheckCircle = styled.span`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 50%;
  height: 25px;
  pointer-events: none;
  position: absolute;
  width: 25px;

  &:after {
    border-radius: 50%;
    background-color: #e14100;
    content: '';
    display: none;
    height: 15px;
    left: 4px;
    position: absolute;
    top: 4px;
    width: 15px;
  }
`;

const StyledRadioInput = styled.input`
  height: 0;
  margin: 0;
  opacity: 0;
  position: absolute;
  width: 0;
`;

const StyledLabel = styled.label`
  cursor: pointer;
  font-size: 0.9em;
  padding-left: 40px;
`;

const StyledWrapper = styled.div`
  align-items: center;
  display: flex;
  font-size: 1em;
  margin-top: 30px;
  position: relative;

  input:checked ~ ${StyledCheckCircle} {
    background-color: #ffffff;
    border: 1px solid #e14100;
  }

  input:checked ~ ${StyledCheckCircle}:after {
    display: block;
  }
`;

const InputRadio = ({ onOptionChangeHandler, option, selectedOption }) => (
  <StyledWrapper>
    <StyledRadioInput
      checked={selectedOption === option.ID}
      id={option.ID}
      name={option.NAME}
      onChange={() => onOptionChangeHandler(option.ID)}
      type="radio"
      value={selectedOption}
    />

    <StyledCheckCircle />
    <StyledLabel htmlFor={option.ID}>{option.LABEL}</StyledLabel>
  </StyledWrapper>
);

InputRadio.propTypes = {
  onOptionChangeHandler: PropTypes.func.isRequired,
  option: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedOption: PropTypes.number.isRequired,
};

export default InputRadio;
