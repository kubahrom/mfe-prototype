import React from 'react';
import ReactDOM from 'react-dom/client';

import { RecipeTagsList } from '@components/RecipeTagsList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CacheProvider, ThemeProvider } from '@emotion/react';
import getTheme from '@libs/theme';

let root: ReactDOM.Root | null = null;
let unmounting = false;

const queryClient = new QueryClient();

const { theme, cache } = getTheme('dashboard-tags');

// Mount function to mount React app to the specified element in the DOM
const mount = async (el: HTMLElement) => {
  while (unmounting) {
    await new Promise((resolve) => setTimeout(resolve, 0));
  }

  if (root === null) {
    root = ReactDOM.createRoot(el);
  }

  root.render(
    <React.StrictMode>
      <CacheProvider value={cache}>
        <ThemeProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <RecipeTagsList />
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    </React.StrictMode>,
  );
};

const unmount = () => {
  if (root !== null) {
    unmounting = true;
    setTimeout(() => {
      root?.unmount();
      root = null;
      unmounting = false;
    }, 0);
  }
};

// Export mount function for host use
export { mount, unmount };
