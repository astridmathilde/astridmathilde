import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';

import '../../assets/scss/global.scss';
import '../../assets/scss/brightness.scss';

import Wrapper from '../wrapper';

const inter = localFont({
  src: [
    {
      path: '../../assets/fonts/InterVariable.woff2',
      weight: '100 500',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/InterVariable-Italic.woff2',
      weight: '100 500',
      style: 'italic',
    }
  ]
})

export default async function Layout({ children }) {
  return (
    <>
    <html lang="en" className={inter.className} suppressHydrationWarning>
    <body>
    
    <ThemeProvider>
    <Wrapper>

    
    {children}
    
    </Wrapper>
    </ThemeProvider>
    
    </body>
    </html>
    </>
  );
}