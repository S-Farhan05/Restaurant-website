"use client"
import { useState } from "react";
import Navv from "../components/navbar2"
import QuantityCounter from "../components/counter";
import Footerr from "../components/footer";
import Link from "next/link";

export default function Cart(){
    return(

<>      
<Navv/>
<div className="bg-backtom object-cover md:h-[410px] h-auto">
                 <h1 className="flex justify-center items-center font-bold md:text-5xl pt-16 text-4xl md:pt-32">Shopping Cart</h1>
                 <div className="flex items-center justify-center mt-5 font-inter text-[20px] pb-10 md:pb-0">
                    <h1 className="text-white">Home</h1>
                    <img src="CaretRight.png" alt="right" />
                    <h1 className="text-[#FF9F0D]">Shopping Cart</h1>
                 </div>
                </div>



                <div className="bg-white text-black min-h-screen">

                <div className="xl:mx-40 lg:mx-24 pt-20">
  {/* Table Header */}
  <div className="grid grid-cols-5 font-inter font-bold lg:text-[18px] text-[14px] text-[#333333] border-b border-gray-300 pb-4">
    <div>Product</div>
    <div className="text-center">Price</div>
    <div className="text-center">Quantity</div>
    <div className="text-center">Total</div>
    <div className="text-center">Remove</div>
  </div>

  {/* Product Rows */}
  <div className="space-y-8 mt-8">
    {/* Row 1 */}
    <div className="grid grid-cols-5 items-center">
      {/* Product Info */}
      <div className="flex items-center">
        <img src="pimg1.png" alt="Burger" className="w-16 h-16" />
        <div className="flex flex-col pl-6 ">
          <h1 className="md:text-[16px] text-[12px]">Burger</h1>
          <div className="pt-2">
            <img src="star3.png" alt="Stars" />
          </div>
        </div>
      </div>
 
      <div className="text-center">$35.00</div>

    
      <div className="text-center">
        <QuantityCounter/>
      </div>

  
      <div className="text-center">$35.00</div>

     
      <div className="text-center">
        <img src="X.png" alt="Remove" className="cursor-pointer w-6 h-6 mx-auto" />
      </div>
    </div>

    {/* Row 2 */}
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center">
        <img src="pimg2.png" alt="Fresh Lime" className="w-16 h-16" />
        <div className="flex flex-col pl-6">
          <h1 className="text-[16px]">Fresh Lime</h1>
          <div className="pt-2">
            <img src="star3.png" alt="Stars" />
          </div>
        </div>
      </div>
      <div className="text-center">$25.00</div>
      <div className="text-center">
      <QuantityCounter/>
      </div>
      <div className="text-center">$25.00</div>
      <div className="text-center">
        <img src="X.png" alt="Remove" className="cursor-pointer w-6 h-6 mx-auto" />
      </div>
    </div>

    
    {/* Row 3 */}
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center">
        <img src="pimg3.png" alt="Pizza" className="w-16 h-16" />
        <div className="flex flex-col pl-6">
          <h1 className="text-[16px]">Pizza</h1>
          <div className="pt-2">
            <img src="star3.png" alt="Stars" />
          </div>
        </div>
      </div>
      <div className="text-center">$15.00</div>
      <div className="text-center">
      <QuantityCounter/>
      </div>
      <div className="text-center">$15.00</div>
      <div className="text-center">
        <img src="X.png" alt="Remove" className="cursor-pointer w-6 h-6 mx-auto" />
      </div>
    </div>

    {/* Row 4 */}
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center">
        <img src="pimg4.png" alt="Chocolate Muffin" className="w-16 h-16" />
        <div className="flex flex-col pl-6">
          <h1 className="text-[16px]">Chocolate Muffin</h1>
          <div className="pt-2">
            <img src="star3.png" alt="Stars" />
          </div>
        </div>
      </div>
      <div className="text-center">$45.00</div>
      <div className="text-center">
      <QuantityCounter/>
      </div>
      <div className="text-center">$45.00</div>
      <div className="text-center">
        <img src="X.png" alt="Remove" className="cursor-pointer w-6 h-6 mx-auto" />
      </div>
    </div>

  
    <div className="grid grid-cols-5 items-center">
      <div className="flex items-center">
        <img src="pimg5.png" alt="Cheese Butter" className="w-16 h-16" />
        <div className="flex flex-col pl-6">
          <h1 className="text-[16px]">Cheese Butter</h1>
          <div className="pt-2">
            <img src="star3.png" alt="Stars" />
          </div>
        </div>
      </div>
      <div className="text-center">$15.00</div>
      <div className="text-center">
      <QuantityCounter/>
      </div>
      <div className="text-center">$15.00</div>
      <div className="text-center">
        <img src="X.png" alt="Remove" className="cursor-pointer w-6 h-6 mx-auto" />
      </div>
    </div>
  </div>
</div>


<div className="flex flex-col xl:flex-row md:mt-28 mt-24 xl:justify-around items-center xl:items-start">
<div className="couppon flex flex-col max-w-[648px]">
  <h1 className="font-bold md:text-[32px] text-[24px] text-center xl:text-left pb-4">Coupon Code</h1>
  <div className="border-2 border-[#E0E0E0] flex flex-col">
    <p className="font-inter md:text-[18px] text-[16px] text-[#828282] w-[80%] mx-5 py-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non</p>
       

       <div className="flex border-2 border-[#E0E0E0] mb-6 h-[62px] mx-5">
      <input className="placeholder:text-[#828282] pl-3 py-4 w-full  rounded-md outline-none hover:bg-gray-200" type="text" placeholder="Enter Here code"  />
      <button className="text-[18px] font-inter rounded-md text-white w-[89px]   bg-[#FF9F0D]   p-2  hover:bg-red-400    ">Apply</button>
      </div>
   
      


  </div>

</div>
<div className="ship mb-24 max-w-[648px] w-full mt-20 xl:mt-0">
<div className="couppon flex flex-col  ">
  <h1 className="font-bold md:text-[32px] text-[24px] pb-4 text-center xl:text-left">Total Bill</h1>
  <div className="border-2 border-[#E0E0E0] flex flex-col">
    <div className="border-b-2 brder-b-[#E0E0E0] space-y-4 py-4">
    <div className="flex md:text-[20px] text-[18px] font-bold justify-between text-[#333333] px-4">
      <p>Cart Subtotal</p>
      <p>$120.00</p>
    </div>
    <div className="flex  md:text-[20px] text-[18px] font-inter justify-between text-[#4F4F4F] px-4">
      <p>Shipping Charge</p>
      <p>$00.00</p>
    </div></div>
    <div className="flex  md:text-[20px] text-[18px] font-bold justify-between text-[#333333] py-4 px-4">
      <p>Total Amount</p>
      <p>$205.00</p>
    </div>


    </div>
    <Link href={"/Cheackoutpage"}><button className="text-white w-full bg-[#FF9F0D] flex items-center justify-center h-[64px] mt-4 hover:bg-red-400">Proceed to Checkout</button></Link>
  </div>
</div>


</div>

{/* whole container */}
</div>
<Footerr/>    
   </> 
  )}