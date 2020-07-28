import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import React from 'react';
import styled from 'styled-components';

import Collapsible from '../Collapsible';
import { INPUT_RADIO_LIST_OPTIONS } from '../../constants';
import InputRadioList from '../InputRadioList';
import { postOperationTypeFilterSet } from '../../redux/actions';
import SearchInput from '../SearchInput';

const StyledWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-radius: 5px;
  box-shadow: 0 4px 17px -5px #a5a5a5;
  height: min-content;
  padding: 30px;
  position: sticky;
  top: 20px;
`;

const StyledCollapsibleHeader = styled.h2`
  font-size: 1em;
  margin: 0;
`;

const StyledHr = styled.hr`
  height: 1px;
  margin: 30px 0;
  width: 100%;
`;

const Sidebar = ({
  postOperationTypeFilter,
  postOperationTypeFilterSetAction,
}) => (
  <StyledWrapper>
    <Collapsible
      header={<StyledCollapsibleHeader>Buscar</StyledCollapsibleHeader>}
    >
      <SearchInput placeholder="Buscar dirección, zona o ciudad" />
    </Collapsible>

    <StyledHr />

    <Collapsible
      header={
        <StyledCollapsibleHeader>Tipo de operación</StyledCollapsibleHeader>
      }
    >
      <InputRadioList
        options={INPUT_RADIO_LIST_OPTIONS.POST_OPERATION_TYPE}
        onOptionChangeHandler={postOperationTypeFilterSetAction}
        selectedOption={postOperationTypeFilter}
      />
    </Collapsible>
  </StyledWrapper>
);

Sidebar.propTypes = {
  postOperationTypeFilter: PropTypes.number.isRequired,
  postOperationTypeFilterSetAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  postOperationTypeFilter: state.postOperationTypeFilter,
});

const mapDispatchToProps = {
  postOperationTypeFilterSetAction: postOperationTypeFilterSet,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
