import "../styles/globals.css";
import { Poppins } from "@next/font/google";

const poppins = Poppins({
  weight: "400",
});
export default function App({ Component, pageProps }) {
  return (
    <div className={poppins.className}>
      <Component {...pageProps} />
      
    </div>
  );
}
