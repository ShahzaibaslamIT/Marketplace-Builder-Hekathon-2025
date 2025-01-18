import Image from "next/image";

export default function Homepage(){
    return(
     <div className="py-12 bg-white flex flex-col home-page ">
        <div className="container mx-auto flex flex-col md:flex-row items-center mt-[100px]">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left bg-red">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black">
              FIND CLOTHES <br /> THAT MATCH <br /> YOUR STYLE
            </h1>
            <p className="mt-6 text-gray-600 text-lg">
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
            <button className="mt-6 px-10 py-3 bg-black text-white text-lg font-medium rounded-lg-hover:bg-gray-800 ">
              Shop Now
            </button>
          </div>
  
          {/* Right Image */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex ">
            <img
              src="/newImage.jpeg"
              alt=""
              className="w-full max-w-lg rounded"
            />
     </div>
        </div>
        <div className="container mx-auto flex justify-center space-x-8 bg-black py-6  mb-[12px]">
        {/* Brand Logos */}
        <a href="#" className="text-white text-xl font-bold hover:text-gray-300 w-[166.48px] h-[33.16px] mt-[841px] ml-[100px]">
          VERSACE
        </a>
        <a href="#" className="text-white text-xl font-bold hover:text-gray-300 w-[166.48px] h-[33.16px] mt-[841px] ml-[100px]">
          ZARA
        </a>
        <a href="#" className="text-white text-xl font-bold hover:text-gray-300 w-[166.48px] h-[33.16px] mt-[841px] ml-[100px]">
          GUCCI
        </a>
        <a href="#" className="text-white text-xl font-bold hover:text-gray-300 w-[166.48px] h-[33.16px] mt-[841px] ml-[100px]">
          PRADA
        </a>
        <a href="#" className="text-white text-xl font-bold hover:text-gray-300 w-[166.48px] h-[33.16px] mt-[841px] ml-[100px]">
          Calvin Klein
        </a>


      </div>












 
        <div className="container mx-auto flex flex-col md:flex-row items-center mt-[100px] ml-[750px]">
                     <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black ml-20px">New Arrival</h1>
    
      </div>

      <div className="ml-[100px]">
            <img
              src="/Frame32.png"
              alt=""
              className="w-full max-w-lg rounded"
            />
    
<div className="text">
    <h1 className="font-bold text-black text-[25px]">T-Shirt with Shape Detail</h1>
   
</div>
<div className="img">
        <img src="/Frame 10.png" alt=""  className="text-[15px]" /> 
    </div>
    <div className="text2">
        <h1 className="text-black font-bold text-[30px]">$120</h1>
    </div>

       </div>

       <div className="ml-[700px] mt-[-620px] ">
            <img
              src="/image 8.png"
              alt=""
              className="w-full max-w-lg rounded"
            />
    
<div className="text">
    <h1 className="font-bold text-black text-[25px]">Skinny Fit jeanes</h1>
   
</div>
<div className="img">
        <img src="/Frame 10.png" alt=""  className="text-[15px]" /> 
    </div>
    <div className="text2">
        <h1 className="text-black font-bold text-[30px]">$240</h1>
    </div>

  

       </div>

       <div className="ml-[1300px] mt-[-650px] ">
            <img
              src="/image 9.png"
              alt=""
              className="w-full max-w-lg rounded"
            />
    
<div className="text">
    <h1 className="font-bold text-black text-[25px]">Checkered Shirt</h1>
   
</div>
<div className="img">
        <img src="/Frame 10.png" alt=""  className="text-[15px]" /> 
    </div>
    <div className="text2">
        <h1 className="text-black font-bold text-[30px]">$180</h1>
    </div>

       </div>
       
       <hr className="mt-[50px]"/>
    
       <div className="container mx-auto flex flex-col md:flex-row items-center mt-[200px] ml-[750px]">
                     <h1 className="text-4xl md:text-6xl font-bold leading-tight text-black ml-20px">Top seling</h1>
    
      </div>

      <div className="ml-[100px]">
            <img
              src="/verical.png"
              alt=""
              className="w-full max-w-lg rounded"
            />
    
<div className="text">
    <h1 className="font-bold text-black text-[25px]">Verical Stripped Shirt</h1>
   
</div>
<div className="img">
        <img src="/Frame 10.png" alt=""  className="text-[15px]" /> 
    </div>
    <div className="text2">
        <h1 className="text-black font-bold text-[30px]">$212</h1>
    </div>

       </div>

       <div className="ml-[700px] mt-[-600px]  ">
            <img
              src="/courage.png"
              alt=""
              className="w-full max-w-lg rounded"
            />
    
<div className="text">
    <h1 className="font-bold text-black text-[25px]">Courage Graphic T-shirt</h1>
   
</div>
<div className="img">
        <img src="/Frame 10.png" alt=""  className="text-[15px]" /> 
    </div>
    <div className="text2">
        <h1 className="text-black font-bold text-[30px]">$145</h1>
    </div>

       </div>


       <div className="ml-[1300px] mt-[-630px]  ">
            <img
              src="/Bermuda.png"
              alt=""
              className="w-full max-w-lg rounded"
            />
    
<div className="text">
    <h1 className="font-bold text-black text-[25px]">Loose Fit Bermuda Short</h1>
   
</div>
<div className="img">
        <img src="/Frame 10.png" alt=""  className="text-[15px]" /> 
    </div>
    <div className="text2">
        <h1 className="text-black font-bold text-[30px]">$80</h1>
    </div>

       </div>

<div  className="container mx-auto flex flex-col md:flex-row items-center  ml-[250px] bg-gray-200 w-105 rounded-lg ">
<h1  className="text-4xl md:text-6xl font-bold leading-tight text-black ml-[250px] w-[1239px] h-[866px] justify-between ">BROWSE BY DRESS STYLE</h1>
</div>
<div className="images">
    <div className="img1 ml-[300px]">
        <img src="/image 11.png" alt="" 
        className="mt-[-700px]  rounded-lg"
        />
       

        
    </div>

    <div className="img1 ml-[800px]">
        
        <img src="/image 13.png" alt="" 
        className="mt-[-290px] w-[900px] h-[290px] rounded-full"

        />
       
       
        
    </div>

    <div className="img1 ml-[300px]">
        <img src="/image 12.png" alt="" 
        className="mt-[50px] w-[900px] h-[290px] rounded-full"
        />
        

    <div className="img1 ml-[1050px]">
        <img src="/image 14.png" alt="" 
        className="mt-[-290px]  rounded-full"
        />
   
    </div>
    </div>
</div>


     
    </div>
    );
  }

        
    
