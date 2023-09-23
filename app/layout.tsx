import type { Metadata } from 'next';

import './globals.css';
import AuthContext from './context/AuthContext';
import ToasterContext from './context/ToasterContext';
import ActiveStatus from './components/ActiveStatus';

export const metadata: Metadata = {
  title: 'Messenger',
  description: 'Social Messenger App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
