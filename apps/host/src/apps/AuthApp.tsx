import { useEffect, useRef } from 'react';

import { useHistory } from 'react-router-dom';
import { mount, unmount } from 'auth/AuthApp';

const AuthApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (!ref.current) return;
    mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    }).then(({ onParentNavigate }) => {
      history.listen(onParentNavigate);
    });

    return () => {
      unmount();
    };
  }, [history]);

  return <div style={{ border: '1px solid blue' }} ref={ref} />;
};

export default AuthApp;
