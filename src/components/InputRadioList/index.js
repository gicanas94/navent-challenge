import PropTypes from 'proptypes';
import React from 'react';
import InputRadio from './InputRadio';

const InputRadioList = ({ onOptionChangeHandler, options, selectedOption }) => (
  <form>
    {options.map((option) => (
      <InputRadio
        key={option.ID}
        onOptionChangeHandler={onOptionChangeHandler}
        option={option}
        selectedOption={selectedOption}
      />
    ))}
  </form>
);

InputRadioList.propTypes = {
  onOptionChangeHandler: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedOption: PropTypes.number.isRequired,
};

export default InputRadioList;
