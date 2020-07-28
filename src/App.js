import 'moment/locale/es';
import { connect } from 'react-redux';
import PropTypes from 'proptypes';
import React, { useEffect } from 'react';
import styled from 'styled-components';

import { appIsLoadingSet } from './redux/actions';
import LoadingSpinner from './components/LoadingSpinner';
import Posts from './components/Posts';
import Sidebar from './components/Sidebar';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 5fr;
  grid-gap: 20px;
  max-width: 1280px;
  margin: auto;
  padding: 20px;
`;

const App = ({ appIsLoading, appIsLoadingSetAction }) => {
  useEffect(() => {
    // Simulate a request
    setTimeout(() => appIsLoadingSetAction(false), 2500);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {appIsLoading && <LoadingSpinner />}

      <StyledWrapper className="app">
        <Sidebar />
        <Posts />
      </StyledWrapper>
    </>
  );
};

App.propTypes = {
  appIsLoading: PropTypes.bool.isRequired,
  appIsLoadingSetAction: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  appIsLoading: state.appIsLoading,
  modalState: state.modal,
});

const mapDispatchToProps = {
  appIsLoadingSetAction: appIsLoadingSet,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
