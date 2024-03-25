import Navbar from './navigation/navbar'
import Footer from './navigation/footer'
 
export default function Layout({ navColor, children }) {
  return (
    <>
      <Navbar bgColor={navColor} />
      {children}
      <Footer />
    </>
  )
}