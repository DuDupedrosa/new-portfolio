'use client';

import Header from '@/components/Common/Header';
import { Button } from '@/components/ui/button';
import React from 'react';
import 'react-modern-drawer/dist/index.css';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-mainBlack">
      <div className="pt-1">
        <Header />
      </div>
    </main>
  );
}
