import { dark, grommet } from 'grommet'
import '../styles/globals.css'
import {Grommet, grommet as grommetTheme} from "grommet"
import marvinsGrommetTheme from "../utils/marvinsGrommetTheme"

function MyApp({ Component, pageProps }) {
  return (
  
  <Grommet theme={marvinsGrommetTheme}>
    <Component {...pageProps} />
  </Grommet>
  )
}

export default MyApp

