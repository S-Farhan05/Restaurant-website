import Link from "next/link";

export default function Footerr(){
return(
    <>
    <div className="text-white bg-black ">
    <div className="flex justify-center flex-wrap md:flex-nowrap md:justify-between pt-28 md:pt-44 border-b-[#FF9F0D] border-b-2 w-auto h-auto sm:mx-4 md:mx-4 lg:mx-24 xl:mx-36 pb-10 space-y-5 md:space-y-0">
        <div className="font-bold lg:text-[32px] text-[24px] flex flex-col">
            <h1 className="text-[#FF9F0D] flex ">St <p className="text-white whitespace-nowrap md:whitespace-normal">ill You Need Our Support?</p></h1>
             <p className="font-inter font-normal text-[16px]">Don’t wait make a smart & logical quote here. Its pretty easy.</p>
        </div>
        <div className="box w-[459px] h-[56px] bg-[#FF9F0D] relative text-white flex items-center font-inter text-[16px] pl-2 "> 
            <div className="absolute  w-[163px] right-0 h-full bg-white text-[#FF9F0D] flex items-center font-inter text-[16px] pl-2"> Subscribe Now</div>
            Enter Your Email   
        </div>
    </div>
      
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 ml-4 xl:ml-24 mt-24 order-1">
        <div className="about flex flex-col">
           <h1 className="font-bold text-[24px]">About Us.</h1>
           <p className="font-inter text-[16px] pt-6">orporate clients and leisure travelers has
                   been relying on Groundlink for dependab
                      safe, and professional chauffeured car
                  service in major cities across World.</p>
                  <div className="flex pt-8 justify-center md:justify-normal">
                    <img className="w-auto h-auto" src="Watch.png" alt="wat" />
                    <div className="flex flex-col font-inter pl-4">
                        <h1 className="text-[18px]">Opening Houres</h1>
                        <p className="text-[14px]">Mon - Sat(8.00 - 6.00)</p>
                        <p className="text-[14px]">Sunday - Closed</p>

                    </div>

                  </div>
</div> {/* first colume close */}

<div className="usefull flex flex-col  xl:pl-28 lg:pl-10 order-2 md:order-4 lg:order-2  md:mx-auto mt-24 lg:mt-0">
<h1 className="font-bold text-[24px]">Useful Links</h1>
<div className="flex flex-col text-[20px] font-inter cursor-pointer space-y-9 pt-6">
    <h1 className="hover:text-[#FF9F0D]">About</h1>
    <h1 className="hover:text-[#FF9F0D]">News</h1>
    <h1 className="hover:text-[#FF9F0D]">Partners</h1>
    <h1 className="hover:text-[#FF9F0D]">Team</h1>
    <h1 className="hover:text-[#FF9F0D]">Menu</h1>
    <h1 className="hover:text-[#FF9F0D]">Contacts</h1>


</div>
</div>





<div className="usefull flex flex-col xl:pl-28 lg:pl-6 order-3">
<h1 className="font-bold text-[24px] mt-24 md:mt-auto lg:mt-0">Help?</h1>
<div className="flex flex-col text-[20px] font-inter cursor-pointer space-y-9 pt-6">
    <Link href={"https://chatgpt.com/"} className="hover:text-[#FF9F0D]">FAQ</Link>
    <h1 className="hover:text-[#FF9F0D]">Term & conditions</h1>
    <h1 className="hover:text-[#FF9F0D]">Reporting</h1>
    <h1 className="hover:text-[#FF9F0D]">Documentation</h1>
    <h1 className="hover:text-[#FF9F0D]">
    Support Policy</h1>
    <h1 className="hover:text-[#FF9F0D]">
    Privacy</h1>


</div>
</div>




<div className="Last flex flex-col space-y-6 xl:pl-12 lg:pl-0 order-4 md:order-2 lg:order-4 md:mx-auto mt-24 md:mt-0">
           <h1 className="font-bold text-[24px]">Recent Post</h1>
           <div className="flex ">
            <img className="" src="foot1.png" alt="" />
            <div className="flex flex-col px-4">
            <h1 className="font-inter text-[16px] opacity-50">20 Feb 2022</h1>
            <h1 className="font-inter text-[18px] text-nowrap">Keep Your Business </h1>
            </div>
            </div> 

            <div className="flex ">
            <img src="foot2.png" alt="" />
            <div className="flex flex-col px-4">
            <h1 className="font-inter text-[16px] opacity-50">20 Feb 2022</h1>
            <h1 className="font-inter text-[18px] text-nowrap">Keep Your Business </h1>
            </div>
            </div> 

            <div className="flex ">
            <img src="foot3.png" alt="" />
            <div className="flex flex-col px-4">
            <h1 className="font-inter text-[16px] opacity-50">20 Feb 2022</h1>
            <h1 className="font-inter text-[18px] text-nowrap">Keep Your Business </h1>
            </div>
            </div> 
           
     {/* closing of last section of footer   */}
     </div>
     {/* closing of grid cols */}
      </div>


 <div className="bg-[#4F4F4F] w-full h-[99px] mt-28 flex items-center justify-around ">
  <div>
    <h1 className="font-inter text-[14px] sm:text-[16px]">Copyright © 2022 by Ayeman. All Rights Reserved.</h1>
  </div>



  <div className="flex gap-2 sm:gap-4 cursor-pointer">
 {/* a div just to hold all icons as a parent */}


  <div className="flex items-center justify-center hover:bg-gray-300 transition duration-1000 w-[36px] h-[34px] bg-white">
<img className=" " src="facebook.png" alt="" />
</div>
<div className="flex items-center justify-center w-[36px] h-[34px] bg-white">
<img className=" " src="twitter.png" alt="" />
</div>
  <div className="flex items-center justify-center w-[36px] h-[34px] bg-white">
<img className=" " src="insta.png" alt="" />
</div>
<div className="flex items-center justify-center w-[36px] h-[34px] bg-white">
<img className=" " src="youtube.png" alt="" />
</div>
<div className="flex items-center justify-center w-[36px] h-[34px] bg-white">
<img className=" " src="github.png" alt="" />
</div>
</div>
 </div>




 </div>

    </>
)


}