// import { loadRemote } from '@module-federation/enhanced/runtime';
// import React, { Suspense, useEffect, useRef } from 'react';

// const RemoteCounter = React.lazy(async () => {
//   const res = await loadRemote('remote/Counter');
//   return res;
// });

// const remote = React.lazy(async () => {
//   const res = await loadRemote('remote/RemoteApp');
//   return res;
// });

export default function App() {
  const a: string = 5;
  return (
    <div>
      Container app
      <div>
        {/* <Suspense fallback={<div>Loading...</div>}>
          <RemoteCounter title="title from container" />
        </Suspense> */}

        {/* <Suspense fallback={<div>Loading...</div>}>
          <MountRemoteApp />
        </Suspense> */}
      </div>
    </div>
  );
}

// export const MountRemoteApp = () => {
//   const ref = useRef<HTMLDivElement>(null);

//   // console.log(remote);

//   useEffect(() => {
//     loadRemote('remote/RemoteApp').then(({ mount }) => {
//       mount(ref.current!);
//     });
//   }, []);

//   return <div ref={ref} />;
// };
