import '../styles/globals.css'
import { Poppins } from '@next/font/google'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ContextProvider } from './api/auth/Context/ContextProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// const poppins = Poppins({
//   weight: '400'
// })
export default function App ({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <div
      // className={poppins.className}
      >
        <ContextProvider>
          <Component {...pageProps} />
        </ContextProvider>
      </div>
    </QueryClientProvider>
  )
}
