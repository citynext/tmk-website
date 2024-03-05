import DefaultLayout from "../components/layout"
import "../styles/globals.css"

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => (<DefaultLayout>{page}</DefaultLayout>));

  return getLayout(
      <Component {...pageProps} />
  );
}
