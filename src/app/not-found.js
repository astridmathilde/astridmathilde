    import { siteTitle } from './layout';

    const pageTitle = 'Something bad happened!';
    
    export const metadata = {
      title: pageTitle + ' – ' + siteTitle,
      description: 'Heia! I am from Northern Norway and I have always been passionate about design and coding.',
    }
    
    export default function error() {
      return (
        <>
        <h2>{ pageTitle }</h2>
        <p><a href="/">Maybe go back?</a></p>
        </>
        );
      }