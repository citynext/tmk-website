import DefaultLayout from "../components/layout"
import "../styles/globals.css"
import { GoogleAnalytics } from '@next/third-parties/google'


export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => (<DefaultLayout navColor={Component.navColor}>{page}</DefaultLayout>));

  return getLayout(
    <>
      <Component {...pageProps} />
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
    </>
  );
}
