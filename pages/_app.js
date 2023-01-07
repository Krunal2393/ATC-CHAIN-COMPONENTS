import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const poppins = Poppins({
  weight: '400'
})
export default function App ({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
    </div>
  )
}
