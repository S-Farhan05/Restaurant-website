import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch, CiShoppingBasket } from "react-icons/ci";
import Link from "next/link";

export default function Nav() {
  return (
    <>
      <div className="nav bg-black flex px-3 md:px-[135px] w-full flex-col text-white">
        <div className="text-center mt-4 md:text-2xl text-lg">
          <span className="text-[#FF9F0D] font-bold">Food</span>Tuck
        </div>
        <div>
          <ul className="flex flex-row justify-evenly md:justify-normal text-[14px] md:text-[16px] md:gap-8 md:mt-[24px] gap-1 cursor-pointer">
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
            <Link href={"/Cheackoutpage"}><li className="hover:text-[#FF9F0D]">Contact</li></Link>

           {/* for icons and input  */}
            <div className="md:relative md:w-[310px] w-20 flex items-center ml-auto -mt-4 absolute ">
              <input
                className="w-full h-[54px] md:h-[54px] rounded-[27px] border-[#FF9F0D] bg-inherit border px-4 pr-[40px] font-normal md:text-[16px] text-[12px] md:block hidden"
                type="text"
                placeholder="Search..."
              />
              <CiSearch
                className="absolute right-4 text-[#FF9F0D] text-lg  md:block hidden"
              />
            </div>

            
            <CiShoppingBasket className="ml-4 md:ml-0  md:block hidden" />
          </ul>
        </div>
      </div>
    </>
  );
}