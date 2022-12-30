import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect } from 'react'
import Navigation from './components/Navigation'

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.js')
  }, [])
  return (
    <>
      <Navigation/>
      <Component {...pageProps} />
    </>
  )
}
