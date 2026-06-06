"use client";
import React from 'react';
import { ContactProvider, useContact } from '../context/ContactContext';
import NavBar from './NavBar';
import ReachOut from './ReachOut';
import { Analytics } from '@vercel/analytics/react';

function AppLayoutContent({ children }) {
  const { isOpen, closeContact } = useContact();
  return (
    <div className="bg-gray-50 min-h-screen">
      <NavBar />
      <div className="pt-20">
        {children}
      </div>
      <ReachOut isOpen={isOpen} onClose={closeContact} />
      <Analytics />
    </div>
  );
}

export default function AppLayout({ children }) {
  return (
    <ContactProvider>
      <AppLayoutContent>
        {children}
      </AppLayoutContent>
    </ContactProvider>
  );
}
