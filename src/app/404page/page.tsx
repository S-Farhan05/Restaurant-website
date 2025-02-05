import Link from "next/link";
import Navv from "../components/navbar2";
import Footerr from "../components/footer";

export default function Error(){
return(
    
    <>
    <Navv/>
    <div className="bg-backtom object-cover md:h-[410px] h-auto">
             <h1 className="flex justify-center items-center font-bold text-5xl pt-16  md:pt-32">404 Error</h1>
             <div className="flex items-center justify-center mt-5 font-inter text-[20px] pb-10 md:pb-0">
                <h1 className="text-white">Home</h1>
                <img src="CaretRight.png" alt="right" />
                <h1 className="text-[#FF9F0D]">404</h1>
             </div>

            </div> 
           
            <div className="bg-white flex flex-col items-center justify-center  py-32">
                
                    <h1 className="text-[96px] text-[#FF9F0D] font-bold">404</h1>
                    <p className="sm:text-[32px] text-[22px] font-bold text-[#333333] mt-8 pl-4 sm:pl-0">Oops! Look likes something going wrong</p>
                    <div className="font-inter text-[18px] text-[#4F4F4F] flex text-center flex-col mt-8 "><p>Page Cannot be found! we’ll have it figured out in no time.</p>
                    <p className="">Menwhile, cheek out these fresh ideas:</p> </div>
                    <Link href={"/"}><button className="text-[18px] font-bold mt-5 text-[#FFFFFF] bg-[#FF9F0D] px-8 py-4 rounded hover:bg-purple-300 ">Go to home</button></Link>

            </div>
            <Footerr/>
            

    
    </>
)

}