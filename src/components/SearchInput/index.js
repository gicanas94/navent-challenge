import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import React from 'react';
import { Search as SearchIcon } from 'styled-icons/evil';
import styled from 'styled-components';

import { searchStringChange } from '../../redux/actions';
import { transitions } from '../../styles';

const StyledWrapper = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  font-size: 0.9em;
  padding: 15px;
  padding-right: 50px;
  transition: border-color ${transitions.speed.superfast} linear;
  width: 100%;

  &:focus {
    border-color: #e14100;
    outline: none;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  box-shadow: -10px 0px 5px 2px #ffffff;
  color: #e14100;
  height: 35px;
  position: absolute;
  right: 10px;
  top: 8px;
  width: 35px;
`;

const SearchInput = ({ searchString, searchStringChangeAction, ...props }) => (
  <StyledWrapper>
    <StyledInput
      {...props}
      onChange={(event) => searchStringChangeAction(event.target.value)}
      type="text"
      value={searchString}
    />
    <StyledSearchIcon />
  </StyledWrapper>
);

SearchInput.propTypes = {
  searchString: PropTypes.string.isRequired,
  searchStringChangeAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  searchString: state.searchString,
});

const mapDispatchToProps = { searchStringChangeAction: searchStringChange };

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
