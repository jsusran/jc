import '../styles/index.css'
import '../styles/fonts.css'
import { AppProps } from "next/app"

// function MyApp({ Component:any, pageProps }) {
//   return <Component {...pageProps} />
// }

const MyApp = ({ Component, pageProps }: AppProps) => { return <Component {...pageProps} /> }

export default MyApp
