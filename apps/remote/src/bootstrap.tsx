import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

let root: ReactDOM.Root | null = null;

// Mount function to mount React app to the specified element in the DOM
const mount = (el: HTMLElement) => {
  if (root === null) {
    root = ReactDOM.createRoot(el);
  }
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
};

// Only run mount in development mode so that app can be run in isolation
if (process.env.NODE_ENV === 'development') {
  const devRootEl = document.getElementById('remote');

  if (devRootEl) {
    mount(devRootEl);
  }
}

// Export mount function for host use
export { mount };
