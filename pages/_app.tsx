import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis"

function MyApp({ Component, pageProps }: AppProps) {
  return ( 
    <MoralisProvider serverUrl='https://dg5uxzgxxluw.usemoralis.com:2053/server' appId='RRtiIFLybVJu21CbusLfNOENyMmCzW8MUMOpiNNM'>
      <Component {...pageProps} />
      
    </MoralisProvider> 
  )
}

export default MyApp
