import localFont from 'next/font/local';
import '../assets/scss/global.scss';
import Wrapper from './wrapper.js'

const interDisplay = localFont({
  src: [
    {
      path: '../assets/fonts/Inter-Display.woff2',
      weight: '400',
      style: 'normal',
    }, 
    {
      path: '../assets/fonts/InterDisplay-Italic.woff2',
      weight: '400',
      style: 'italic',
    }, 

  ]
})

export const siteTitle = 'Astrid Mathilde';

export default function Layout({ children }) {
  return (
    <>
    <html lang="en" className={interDisplay.className + " dark"}>
    <Wrapper>
    {children}
    </Wrapper>
    </html>
    </>
    );
  }