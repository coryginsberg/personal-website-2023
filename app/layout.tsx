import {Inter} from 'next/font/google';
import * as React from 'react';
import Footer from 'sections/Footer';
import Header from 'sections/Header';

import '@styles/globals.scss';

const inter = Inter({subsets: ['latin']});

export const metadata = {
  title: 'Cory Ginsberg',
  description: 'My personal portfolio website.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
