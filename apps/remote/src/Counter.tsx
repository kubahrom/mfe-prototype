import React, { useState } from 'react';

type Props = {
  title: string;
  text?: string;
};

export default function Counter({ title, text }: Props) {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: '1px solid blue' }}>
      <h4 style={{ display: 'block', marginBottom: 1 }}>{title}</h4>
      {text && <p>{text}</p>}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
        <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
}
