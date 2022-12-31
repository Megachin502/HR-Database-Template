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
      <a
        href="https://www.langleywebmasters.com/"
        className="text-decoration-none text-black fixed-bottom ps-4 pb-3"
      >
        Created by Elvis Lam
      </a>
    </>
  )
}
