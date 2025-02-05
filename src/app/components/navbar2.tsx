import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";

export default function Navv() {
  return (
    <>
      <div className="nav bg-black flex py-4 md:py-11  justify-around w-full flex-col md:flex-row text-white">
        <div className=" text-xl text-center lg:text-2xl ">
          <span className="text-[#FF9F0D] font-bold">Food</span>Tuck
        </div>
        <div>
          <ul className="flex flex-row justify-evenly  text-[14px] md:text-[16px] md:gap-8  sm:gap-2 pt-2 md:pt-0 cursor-pointer ">
          <Link href={"/"}><li className="hover:text-[#FF9F0D]">Home</li></Link>
            <Link href={"/Menupage"}><li className="hover:text-[#FF9F0D]">Menu</li></Link>
            <Link href={"/404page"}><li className="hover:text-[#FF9F0D]">Blog</li></Link>
            <Link href={"/404page"}><li className="hover:text-[#FF9F0D]">Pages</li></Link>
            <Link href={"/chefspage"}><li className="hover:text-[#FF9F0D]">About</li></Link>
            <div>
              <ul className="group">
                <p className="hover:text-[#FF9F0D] flex">
                  Shop {/* <RiArrowDropDownLine className="mt-1 text-[22px]" /> */}
                  <img src="dropdown.png" alt="dropdown " className="ml-[1px]" />
                </p>
                <span className="hidden group-hover:block absolute">
                  <Link href={"/Shoplistpage"}><li className="hover:text-[#FF9F0D]">Shop Items</li></Link>
                   <Link href={"/ShopDetailspage"}><li className="hover:text-[#FF9F0D]">Shop Details</li></Link>
                </span>
              </ul>
            </div>
            <Link href={"/Cheackoutpage"}><li className="hover:text-[#FF9F0D]">Contact</li></Link> </ul>
            </div>

          
               <div className="flex gap-3 justify-center pt-4 md:pt-0 cursor-pointer">
             <img className="w-5 h-5 md:w-6 md:h-6" src="MagnifyingGlass.png" alt="Zoom" />
             <img className="w-5 h-5 md:w-6 md:h-6" src="User.png" alt="Basket" />
            <Link href={"/ShoppingCartpage"}><img className="w-5 h-5 md:w-6 md:h-6" src="Tote.png" alt="Basket" /></Link>
            </div>
      </div>
      
    </>
  );
}