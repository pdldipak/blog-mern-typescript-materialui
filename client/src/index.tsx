import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ToggleColorMode from './utility/DarkTheme';
import CssBaseline from '@material-ui/core/CssBaseline';

ReactDOM.render(
  <>
    <ToggleColorMode>
      <CssBaseline />
      <App />
    </ToggleColorMode>
  </>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
