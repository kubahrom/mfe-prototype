import { useEffect, useRef } from 'react';
import { mount } from 'marketing/MarketingApp';

import { useHistory } from 'react-router-dom';

const MarketingApp = () => {
  const ref = useRef<HTMLDivElement>(null);
  const history = useHistory();

  useEffect(() => {
    if (!ref.current) return;

    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    history.listen(onParentNavigate);
  }, [history]);

  return <div style={{ border: '1px solid green' }} ref={ref} />;
};

export default MarketingApp;
