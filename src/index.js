import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';

import App from './App';
import { GlobalFonts, GlobalStyles } from './styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalFonts />
    <GlobalStyles />
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
