import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.js')
  }, [])
  return (
    <>
      <Script
        src="https://upload-widget.cloudinary.com/global/all.js"
        type="text/javascript"
        strategy="beforeInteractive"
      />
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}
