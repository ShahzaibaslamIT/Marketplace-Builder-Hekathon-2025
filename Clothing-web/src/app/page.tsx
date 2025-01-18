import Image from "next/image";
import Navbar from "./components/Navbar";
import Homepage from "./components/homepage";
import Footer from "./components/footer";
import ProductDetail from "./ProductDetail/page";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <ProductDetail/>
      <Footer/>
      
    </div>
  )
}
