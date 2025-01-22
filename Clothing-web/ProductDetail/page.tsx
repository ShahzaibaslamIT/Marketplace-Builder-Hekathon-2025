import Navbar from "../components/Navbar"
import Footer from "../components/footer"
"use-client"
import Image from "next/image"




export default function ProductDetail(){
    return(
        <div>
        <Navbar/>
        

        <div className="w-[259px] h-[22px] mt-[80px] ml-[100px] gap-[12px] text-black text-[50px]">
            <Image className="mb-[500px]" src={'/image1.png'} alt="" width={259} height={22}/>

        <Footer/>    

        </div>

       

        
        
        
        
        
        </div>

    )
}