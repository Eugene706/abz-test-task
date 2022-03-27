import React from 'react';
import ReactDOM from 'react-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import 'styles/index.scss';
import App from 'App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#00BDD3',
    },
    error: {
      main: '#CB3D40',
    },
  },
  typography: {
    fontFamily: 'Nunito',
    fontSize: 16,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
