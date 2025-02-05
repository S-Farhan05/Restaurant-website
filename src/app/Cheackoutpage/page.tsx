import Link from "next/link";
import Footerr from "../components/footer";
import Navv from "../components/navbar2";

export default function Cheack(){

    return(
    <>
   <Navv/>
   <div className="bg-backtom object-cover md:h-[410px] h-auto">
             <h1 className="flex justify-center items-center font-bold md:text-5xl text-3xl pt-16  md:pt-32 text-white">Checkout Page</h1>
             <div className="flex items-center justify-center mt-5 font-inter text-[20px] pb-10 md:pb-0">
                <h1 className="text-white">Home</h1>
                <img src="CaretRight.png" alt="right" />
                <h1 className="text-[#FF9F0D]">Checkkout</h1>
             </div>
            </div> 

            {/* reusbale photo again */}
            <div className="bg-white h-full pt-24">

       
       
       
            <h1 className="font-bold text-[20px] text-[#333333] ml-12">Shipping Address</h1>
       
            <div className="flex flex-col lg:flex-row justify-evenly mt-6 mb-28 px-4">
 
  <div className="flex flex-col w-full max-w-[900px]">
    <div className="flex flex-col md:flex-row gap-6">
      {/* First Form */}
      <form className="flex flex-col text-[#333333] text-[16px] space-y-4 mt-2 w-full max-w-[424px]">
        <label htmlFor="F-name">First name</label>
        <input type="text" id="F-name" className="w-full border-2 border-[#E0E0E0] outline-none py-3 px-2" />
        
        <label htmlFor="Email">Email address</label>
        <input type="email" id="Email" className="w-full border-2 border-[#E0E0E0] outline-none py-3 px-2" />
        
        <label htmlFor="company">Company</label>
        <input type="text" id="company" className="w-full border-2 border-[#E0E0E0] outline-none py-3 px-2" />

        <label htmlFor="City">City</label>
        <select defaultValue="default" id="City" className="w-full border-2 border-[#E0E0E0] rounded-md py-4 px-2 text-[#828282]">
          <option value="default" hidden>Choose city</option>
          <option value="Karachi">Karachi</option>
          <option value="Lahore">Lahore</option>
          <option value="Islamabad">Islamabad</option>
        </select>

        <label htmlFor="Address1">Address 1</label>
        <input type="text" id="Address1" className="w-full border-2 border-[#E0E0E0] outline-none py-3 px-2" />
      </form>

    
      <form className="flex flex-col text-[#333333] text-[16px] space-y-4 mt-2 w-full max-w-[424px]">
        <label htmlFor="L-name">Last name</label>
        <input type="text" id="L-name" className="w-full border-2 border-[#E0E0E0] outline-none py-3 px-2" />
        
        <label htmlFor="nUMBER">Phone number</label>
        <input type="number" id="nUMBER" className="w-full border-2 border-[#E0E0E0] outline-none py-3 px-2" />

        <label htmlFor="Country">Country</label>
        <select defaultValue="default" id="Country" className="w-full border-2 border-[#E0E0E0] rounded-md py-4 px-2 text-[#828282]">
          <option value="default" hidden>Choose country</option>
          <option value="Pakistan">Pakistan</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Iran">Iran</option>
        </select>

        <label htmlFor="code">Zip code</label>
        <input type="number" id="code" className="w-full border-2 border-[#E0E0E0] outline-none py-3 px-2" />

        <label htmlFor="Address2">Address 2</label>
        <input type="text" id="Address2" className="w-full border-2 border-[#E0E0E0] outline-none py-3 px-2" />
      </form>
    </div>


    <h1 className="text-[#333333] text-[20px] font-bold mt-6">Billing Address</h1>
    <div className="flex gap-2">
      <input type="checkbox" id="box" />
      <label htmlFor="box" className="text-[#4F4F4F] text-[16px]">Same as shipping address</label>
    </div>

 
    <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-4">
      <Link href={"/ShoppingCartpage"}>
        <div className="flex justify-center items-center bg-white gap-2 border-2 border-[#E0E0E0] h-[56px] cursor-pointer hover:bg-gray-300">
          <img src="cartleft.png" alt="cart" />
          <p className="text-[16px] text-[#4F4F4F]">Back to cart</p>
        </div>
      </Link>
      <div className="flex justify-center bg-[#FF9F0D] gap-2 h-[56px] items-center cursor-pointer hover:bg-red-300">
        <p className="text-[16px] text-[#ffffff]">Proceed to shipping</p>
        <img src="cartright.png" alt="cart" />
      </div>
    </div>
  </div>


  <div className="w-full lg:max-w-[500px] border-2 border-[#E0E0E0] flex flex-col mt-6 lg:mt-0 justify-center lg:justify-normal">
    {[...Array(3)].map((_, i) => (
      <div key={i} className="flex border-b-2 border-[#E0E0E0] px-4 py-4">
        <img src="cheackimage.png" alt="cheackpage" />
        <div className="flex flex-col space-y-2 ml-3">
          <h1 className="text-[#333333] text-[16px] font-bold">Chicken Tikka Kabab</h1>
          <p className="text-[14px] text-[#4F4F4F]">150 gm net</p>
          <p className="text-[14px] text-[#4F4F4F]">50$</p>
        </div>
      </div>
    ))}

    
    <div className="px-4 border-b-2 border-[#E0E0E0] space-y-4 mt-4">
      <div className="flex justify-between text-[16px]">
        <p className="text-[#4F4F4F]">Sub-total</p>
        <p className="text-[#333333]">130$</p>
      </div>
      <div className="flex justify-between text-[16px]">
        <p className="text-[#4F4F4F]">Shipping</p>
        <p className="text-[#333333]">Free</p>
      </div>
      <div className="flex justify-between text-[16px]">
        <p className="text-[#4F4F4F]">Discount</p>
        <p className="text-[#333333]">25%</p>
      </div>
      <div className="flex justify-between text-[16px]">
        <p className="text-[#4F4F4F]">Tax</p>
        <p className="text-[#333333]">54.76$</p>
      </div>
    </div>

    
    <div className="flex justify-between text-[18px] text-[#333333] px-4 py-6">
      <p>Total</p>
      <p className="font-bold">432.65$</p>
    </div>
    <div className="bg-[#FF9F0D] mx-4 text-white flex justify-center items-center h-[58px] rounded-md hover:bg-red-300 gap-3 cursor-pointer mb-4">
      <p>Place an order</p>
      <img src="ArrowRightwhite.png" alt="" />
    </div>
  </div>
</div>


  <Footerr/>
 </div>
   
   
   
   
   
    </>
    
)
}