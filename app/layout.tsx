import type {Metadata} from 'next';
import type {ReactNode} from 'react';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'BODY32',
    template: '%s | BODY32'
  },
  description:
    'Discover your wellness personality through a modern experience inspired by Eastern philosophy.'
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
