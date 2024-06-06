import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createMemoryHistory,
  createBrowserHistory,
  Location,
  History,
} from 'history';

import App from './App';

let root: ReactDOM.Root | null = null;

const ROOT_EL_ID = 'auth_root';

type ConfigOptions = {
  onNavigate?: (location: Location) => void;
  defaultHistory?: History;
  initialPath?: string;
};

// Mount function to mount React app to the specified element in the DOM
const mount = (
  el: HTMLElement,
  { onNavigate, defaultHistory, initialPath }: ConfigOptions,
) => {
  const history =
    defaultHistory ||
    createMemoryHistory({ initialEntries: [initialPath || ''] });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  if (root === null) {
    root = ReactDOM.createRoot(el);
  }
  root.render(
    <React.StrictMode>
      <App history={history} />
    </React.StrictMode>,
  );

  return {
    onParentNavigate: ({ pathname: nextPathname }: Location) => {
      const { pathname } = history.location;

      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// Only run mount in development mode so that app can be run in isolation
if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.getElementById(ROOT_EL_ID);

  if (devRootEl) {
    mount(devRootEl, {
      defaultHistory: createBrowserHistory(),
    });
  }
} else {
  const prodRootEl = document.getElementById(ROOT_EL_ID);
  if (prodRootEl) {
    prodRootEl.innerHTML =
      'This app is not for standalone use. Please use the host app to view this app.';
  }
}

// Export mount function for host use
export { mount };
