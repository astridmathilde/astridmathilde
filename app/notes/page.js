import { siteTitle } from "../layout";
import utils from "../assets/scss/utils.module.scss"

const pageTitle = 'Notes';

export const metadata = {
  metadataBase: new URL('https://astridmathilde.no/notes'),
  title: pageTitle + ' – ' + siteTitle
}

export default function notes() {
  return (
    <>
    <h2 className={utils.screen_reader_text}>Notes</h2>
    <p>coming here</p>
    </>
  )
}