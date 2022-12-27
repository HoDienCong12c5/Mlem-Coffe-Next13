import '../styles/globals.scss'
import React from 'react'
export default function App({ Component, pageProps }) {
  return <>
    <div>
    header
    </div>
    <Component {...pageProps} />
    <div>
    Footer
    </div>

  </>
}
