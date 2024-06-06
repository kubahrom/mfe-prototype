import { useEffect, useRef } from 'react';
import { mount } from 'remote/RemoteApp';
import Counter from 'remote/Counter';

const RemoteApp = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    mount(ref.current);
  }, []);

  return (
    <>
      <div style={{ border: '1px solid yellow' }} ref={ref} />
      <Counter title="test" />
    </>
  );
};

export default RemoteApp;
