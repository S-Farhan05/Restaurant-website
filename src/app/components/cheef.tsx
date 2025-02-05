export default function Chef(){

    return(
       <>        <h1 className="font-title md:text-[32px] text-[18px] text-center lg:mt-16 md:mt-12 mt-6 text-[#FF9F0D]">Choose & Pick</h1>
        <h1 className=" text-[#FF9F0D] text-[30px] md:text-[48px] font-bold flex justify-center">Fr <p className="text-white">om Our Menu</p></h1>

        {/* <div className="flex gap-3 sm:gap-7 text-[14px] sm:text-[18px] md:text-[20px] xl:ml-[305px] lg:ml-40 ml-6 font-inter md:gap-14 xl:gap-20 mt-3 md:mt-6 cursor-pointer font-bold"> */}
        <div className="flex text-[14px] sm:text-[18px] md:text-[20px]  justify-around xl:justify-normal xl:ml-[220px] xl:gap-20 lg:ml-40 font-inter mt-3 md:mt-6 cursor-pointer font-bold text-[#FFFFFF]">
            <h1 className="hover:text-[#FF9F0D] ">Breakfast</h1>
            <h1 className="hover:text-[#FF9F0D] ">Lunch</h1>
            <h1 className="hover:text-[#FF9F0D] ">Dinner</h1>
            <h1 className="hover:text-[#FF9F0D] ">Dessert</h1>
            <h1 className="hover:text-[#FF9F0D] ">Drink</h1>
            <h1 className="hover:text-[#FF9F0D] hidden sm:block">Snacks</h1>
            <h1 className="hover:text-[#FF9F0D]  hidden sm:block">Soups</h1>
                 {/* <div className="relative bg-backimg bg-cover bg-center w-[500px] h-[400px]">
           <img className="relative w-auto h-auto m-auto" src="/greenvege.png" alt="vegetables" />
              </div> */}
        </div>
        <div className="lg:flex lg:ml-10 lg:mt-8 xl:ml-[135px] ">
            <div className="background bg-backimg bg-cover bg-center w-auto h-auto mt-8 lg:w-[515px] lg:h-[406px]  ">
            <img className="  w-auto h-auto m-auto" src="greenvege.png" alt="vegtables " />
          
            </div>

            {/* Other side section of menu */}
            <div className="NO NEED OTHER SECTION FOR FLEX WORK  ">
            <div className="grid sm:grid-cols-2 grid-cols-1 font-inter space-y-7 text-[#FFFFFF]">
               
               <div className="flex sm:flex-row flex-col mt-7 ml-2 sm:ml-0"><img className=" sm:w-auto sm:h-auto  w-[90px] h-auto mx-auto sm:mx-0" src="Menu1.png" alt="Menu" />
               <div className="flex flex-col md:pl-4 items-center sm:items-start ">
               <h1 className=" font-bold text-[20px] mt-3 sm:mt-0">Lettuce Leaf</h1>
               <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
               <h1 className="font-bold text-[18px] text-[#FF9F0D]">12.5$</h1>
               </div>
               </div>


               {/* hidden  group-hover:block looks cool on pc but hover isnt on mobile so no faida */}


               <div className="flex sm:flex-row flex-col mt-7 ml-2 sm:ml-0"><img className=" sm:w-auto sm:h-auto  w-[90px] h-auto mx-auto sm:mx-0" src="Menu2.png" alt="Menu" />
               <div className="flex flex-col md:pl-4 items-center sm:items-start ">
               <h1 className=" font-bold text-[20px] mt-3 sm:mt-0">Glow Cheese</h1>
               <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
               <h1 className="font-bold text-[18px] text-[#FF9F0D]">12.5$</h1>
               </div>
               </div>


               <div className="flex sm:flex-row flex-col mt-7 ml-2 sm:ml-0"><img className=" sm:w-auto sm:h-auto  w-[90px] h-auto mx-auto sm:mx-0" src="Menu3.png" alt="Menu" />
               <div className="flex flex-col md:pl-4 items-center sm:items-start ">
               <h1 className=" font-bold text-[20px] mt-3 sm:mt-0">Fresh Breakfast</h1>
               <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
               <h1 className="font-bold text-[18px] text-[#FF9F0D]">12.5$</h1>
               </div>
               </div>
                
               <div className="flex sm:flex-row flex-col mt-7 ml-2 sm:ml-0"><img className=" sm:w-auto sm:h-auto  w-[90px] h-auto mx-auto sm:mx-0" src="Menu4.png" alt="Menu" />
               <div className="flex flex-col md:pl-4 items-center sm:items-start ">
               <h1 className=" font-bold text-[20px] mt-3 sm:mt-0">Italian Pizza</h1>
               <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
               <h1 className="font-bold text-[18px] text-[#FF9F0D]">12.5$</h1>
               </div>
               </div>



               <div className="flex sm:flex-row flex-col mt-7 ml-2 sm:ml-0"><img className=" sm:w-auto sm:h-auto  w-[90px] h-auto mx-auto sm:mx-0" src="Menu5.png" alt="Menu" />
               <div className="flex flex-col md:pl-4 items-center sm:items-start ">
               <h1 className=" font-bold text-[20px] mt-3 sm:mt-0">Mild Butter</h1>
               <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
               <h1 className="font-bold text-[18px] text-[#FF9F0D]">12.5$</h1>
               </div>
               </div>
                
               <div className="flex sm:flex-row flex-col mt-7 ml-2 sm:ml-0"><img className=" sm:w-auto sm:h-auto  w-[90px] h-auto mx-auto sm:mx-0" src="Menu6.png" alt="Menu" />
               <div className="flex flex-col md:pl-4 items-center sm:items-start ">
               <h1 className=" font-bold text-[20px] mt-3 sm:mt-0">Sllice Beef</h1>
               <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
               <h1 className="font-bold text-[18px] text-[#FF9F0D]">12.5$</h1>
               </div>
               </div>


               <div className="flex sm:flex-row flex-col mt-7 ml-2 sm:ml-0"><img className=" sm:w-auto sm:h-auto  w-[90px] h-auto mx-auto sm:mx-0" src="Menu7.png" alt="Menu" />
               <div className="flex flex-col md:pl-4 items-center sm:items-start ">
               <h1 className=" font-bold text-[20px] mt-3 sm:mt-0">Fresh Bread</h1>
               <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
               <h1 className="font-bold text-[18px] text-[#FF9F0D]">12.5$</h1>
               </div>
               </div>
                
               <div className="flex sm:flex-row flex-col mt-7 ml-2 sm:ml-0"><img className=" sm:w-auto sm:h-auto  w-[90px] h-auto mx-auto sm:mx-0" src="Menu8.png" alt="Menu" />
               <div className="flex flex-col md:pl-4 items-center sm:items-start ">
               <h1 className=" font-bold text-[20px] mt-3 sm:mt-0">Mushaom Pizza</h1>
               <p className="text-[14px]">Lacus nisi, et ac dapibus velit in consequat.</p>
               <h1 className="font-bold text-[18px] text-[#FF9F0D]">12.5$</h1>
               </div>
               </div>


            </div>
       </div>
        </div>

        <section className="below div mt-12 text-[#FFFFFF] ">
        <h1 className="font-title md:text-[32px] text-[18px] text-center lg:mt-16 md:mt-12 mt-6 text-[#FF9F0D]">chefs</h1>
        <h1 className=" text-[#FF9F0D] text-[30px] md:text-[48px] font-bold flex justify-center">Me <p className="text-white">et Our Chef</p></h1>
        <div className="flex flex-wrap justify-evenly">
            <img className="lg:w-auto h-auto" src="Chef1.png" alt="chefs" />
            <img className="w-auto h-auto" src="Chef2.png" alt="chefs" />
            <img className="w-auto h-auto" src="Chef3.png" alt="chefs" />
            <img className="w-auto h-auto" src="Chef4.png" alt="chefs" />
        </div>
          <div className="flex justify-center md:mt-8 mt-4">
             <button className="text-center rounded-[25px] border border-[#FF9F0D]  
              w-[155px] hover:bg-red-400 hover:text-black h-[50px] text-[#FFFFFF]">See more</button>
         </div>   
         <h1 className="text-[#FF9F0D] font-title md:text-[32px] text-[18px] md:ml-[135px]  md:mt-20 mt-4 ml-6 ">Testimonials</h1> 
          <h1 className="font-bold text-white md:text-[48px] sm:text-[30px] text-[24px] md:ml-[135px] ml-6">What our client are saying</h1>

 
        
        <div className="sect flex justify-center items-center relative">
  
  <img
    className="absolute md:top-[60px] top-[-0px]  w-28 h-28 md:w-36 md:h-36"
    src="clientpic1.png"
    alt="cir"
  />


  <div className="bg-white max-w-4xl w-full h-auto p-6 md:p-10 md:mt-36 mt-20 flex flex-col items-center">
    <h1 className="text-[#FF9F0D] font-inter text-4xl text-center pt-2 md:pt-16">99</h1>
    <p className="text-[16px] md:text-[18px] text-[#4F4F4F] text-center mt-6 lg:px-16">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    <img className="mt-6" src="star.png" alt="" />
    <h1 className="font-bold text-[24px] text-[#333333] mt-2">Alamin Hasan</h1>
    <h1 className="text-[#828282] md:text-[16px] text-[12px] font-bold mt-2">Food Specialist</h1>
  </div>
  
</div>
<div className="dot flex justify-center">
<img className="mt-5 " src="dot.png" alt="" />  </div>





<div className="relative w-full h-[500px] md:mt-14 lg:mt-20">
{/* bg image */}
  <img
    className="absolute inset-0 w-full h-full object-cover"
    src="docclient.png"
    alt="Background Image"
  />

  {/* Text Content */}
  <div className="absolute top-1/2 right-0 md:w-1/2 transform -translate-y-1/2 text-right text-white px-10">
    <h1 className="text-[#FF9F0D] text-[26px] md:text-[32px] font-title ">Restaurant Active Process</h1>
    <div className="lg:text-[48px] md:text-[40px] text-[32px] font-bold mt-4">
      <span className="text-[#FF9F0D]">We </span>Document Every Food Bean Process until it is saved
    </div>
    <p className="font-inter text-[16px] mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
    </p>

   
    <div className="flex items-center justify-end gap-4 mt-6">
      {/* Read More Button */}
      <button className="text-center rounded-[25px] border border-[#FF9F0D] text-white w-[155px] hover:bg-red-400 hover:text-black h-[50px] lg:mb-4 xl:mb-0">
        Read more
      </button>

   
      <div className="flex items-center">
        <img src="play.png" alt="Icon" className="w-6 h-6 mr-2" />
        <h1 className="font-inter font-bold text-[15px]">Play Video</h1>
      </div>
    </div>
  </div>
</div>
  
  
<h1 className="font-title md:text-[32px] text-[18px] text-center lg:mt-16 md:mt-12 mt-6 text-[#FF9F0D]">Blog Post</h1>
<h1 className=" text-[#FF9F0D] text-[30px] md:text-[48px] font-bold flex justify-center">La <p className="text-white"> test News & Blog</p></h1>

<div className="flex justify-center md:gap-6 gap-1 ">
<div className=" border border-[#94959B] max-w-[424px] transform hover:scale-110 transition duration-1000">
    <img className="h-auto w-auto " src="News1.png" alt="news" />
    <div className="flex flex-col">
      <h1 className="font-inter md:text-[16px] text-[13px] text-[#FF9F0D] px-2 sm:px-5">10 February 2022 </h1>
      <h1 className="font-bold md:text-[24px] text-[14px] px-2 sm:px-5 mt-5">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h1>
      <div className="flex justify-between mt-7 px-2 sm:px-5 mb-7">
       <p className="font-inter md:text-[16px] text-[12px] ">Learn More</p>
       <div className="flex sm:flex-row flex-col gap-2">
        <img src="ThumbsUp.png" alt="" />
        <img src="ChatDots.png" alt="" />
        <img src="ShareNetwork.png" alt="" />
       </div>
      </div>
    </div>
  </div>
  <div className=" border border-[#94959B] max-w-[424px] transform hover:scale-110 transition duration-1000">
    <img className="h-auto w-auto" src="News1.png" alt="news" />
    <div className="flex flex-col">
      <h1 className="font-inter md:text-[16px] text-[13px] text-[#FF9F0D] px-2 sm:px-5">10 February 2022 </h1>
      <h1 className="font-bold md:text-[24px] text-[14px] px-2 sm:px-5 mt-5">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h1>
      <div className="flex justify-between mt-7 px-2 sm:px-5 mb-7">
       <p className="font-inter md:text-[16px] text-[12px] whitespace-nowrap">Learn More</p>
       <div className="flex sm:flex-row flex-col gap-2">
        <img src="ThumbsUp.png" alt="" />
        <img src="ChatDots.png" alt="" />
        <img src="ShareNetwork.png" alt="" />
       </div>
      </div>
    </div>
  </div>
  <div className=" border border-[#94959B] max-w-[424px] transform hover:scale-110 transition duration-1000">
    <img className="h-auto w-auto" src="News1.png" alt="news" />
    <div className="flex flex-col">
      <h1 className="font-inter md:text-[16px] text-[13px] text-[#FF9F0D] px-2 sm:px-5">10 February 2022 </h1>
      <h1 className="font-bold md:text-[24px] text-[14px] px-2 sm:px-5 mt-5">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</h1>
      <div className="flex justify-between mt-7  sm:px-5 mb-3 md:mb-7">
       <p className="font-inter md:text-[16px] text-[12px] whitespace-nowrap">Learn More</p>
       <div className="flex sm:flex-row flex-col gap-2">
        <img src="ThumbsUp.png" alt="" />
        <img src="ChatDots.png" alt="" />
        <img src="ShareNetwork.png" alt="" />
       </div>
      </div>
    </div>
  </div>

</div>


        </section>   
        </>

    )
}
