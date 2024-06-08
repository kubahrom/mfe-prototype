import React, { PropsWithChildren } from 'react';
import { Navbar } from './Navbar';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import getTheme from '@libs/theme';
import { CssBaseline } from '@mui/material';

const { theme, cache } = getTheme('host');

function Layout({ children }: PropsWithChildren) {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <main>{children}</main>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default Layout;
