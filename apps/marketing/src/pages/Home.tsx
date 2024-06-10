import Features from '@components/Features';
import Hero from '@components/Hero';
import { useTitle } from '@hooks/useTitle';
import React from 'react';

export default function Home() {
  useTitle('MFE');

  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
