import Navbar from "../components/navigation/navbar";
import Footer from "../components/navigation/footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
    </>
  );
}
