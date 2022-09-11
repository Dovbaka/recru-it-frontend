import React, { FC } from 'react';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import breakpoints from './breakpoints';
import palette from './palette';
import typography from './typography';
import components from './overrides';

export const theme = createTheme({
  components,
  typography,
  breakpoints,
  palette,
});

const MaterialUiTheme: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MaterialUiTheme;
