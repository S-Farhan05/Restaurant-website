export default function Choose(){
    return(
    
    <>
    <div className="Why-us xl:pl-[135px] grid grid-cols-2 h-auto bg-black ">
       
       <div className="lg:relative xl:mt-7 flex flex-col items-center xl:block p-0 m-0">
        {/* <img className="w-[360px] h-[352px] absolute  " src="Epic1.png" alt="choosepic  " />
       <img className="w-[244px] h-[306px] absolute top-[365px]" src="Epic3.png" alt="choosepic" />
       <img className="w-[281px] h-[231px] absolute  left-[370px] top-[118px] " src="Epic2.png" alt="choosepic " />
       <img className="w-[221px] h-[226px] absolute left-[255px] top-[367px] " src="Epic4.png" alt="choosepic" />
       <img className="w-[161px] h-[168px] absolute  left-[490px] top-[360px]" src="Epic5.png" alt="choosepic" />
       <img className="w-[161px] h-[166px] absolute  left-[490px] top-[540px]" src="Epic6.png" alt="choosepic" /> */}
       <img
        className="w-[30vw]  h-auto xl:w-[360px] xl:h-[352px] xl:absolute"
        src="Epic1.png"
        alt="choosepic"
      />
      <img
        className="w-[30vw] h-auto xl:w-[244px]  xl:h-[306px] xl:absolute xl:top-[365px]"
        src="Epic3.png"
        alt="choosepic"
      />
      <img
        className="w-[30vw] h-auto xl:w-[281px] xl:h-[231px] xl:absolute xl:left-[370px] xl:top-[118px]"
        src="Epic2.png"
        alt="choosepic"
      />
      <img
        className="w-[30vw] h-auto xl:w-[221px] xl:h-[226px] xl:absolute xl:left-[255px] xl:top-[367px] sm:hidden lg:block"
        src="Epic4.png"
        alt="choosepic"
      />
      <img
        className="w-[30vw] h-auto xl:w-[161px] xl:h-[168px] xl:absolute xl:left-[490px] xl:top-[360px] sm:hidden lg:block"
        src="Epic5.png"
        alt="choosepic"
      />
      <img
        className="w-[30vw] h-auto xl:w-[161px] xl:h-[166px] xl:absolute xl:left-[490px] xl:top-[540px] sm:hidden lg:block"
        src="Epic6.png"
        alt="choosepic"
      />
       </div> 
    
       {/* 2nd section */}
    
    
       <div className="xl:mt-7 xl:ml-9 xl:max-w-[523px] text-white ">
     <div className="chose font-title text-[#FF9F0D] md:text-[32px] text-[24px]">Why Choose us</div>
     <div className="font-bold md:text-5xl text-3xl break-words"><span className="text-[#FF9F0D] ">Ex</span>tra ordinary taste And Experienced </div>
    <p className="md:pt-3 pt-2 font-inter md:text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
       
       
       {/* yellow struct */}
    
    <div className="grid  grid-cols-3 md:mt-6  mt-2">
     <div className="lg:w-[102px] lg:h-[100px] h-[55px] w-[55px] sm:h-[70px] sm:w-[70px] bg-[#FF9F0D] rounded-md flex justify-center items-center "> <img className="text-center" src="Hamburger.png" alt="idk " /></div>
     <div className="lg:w-[102px] lg:h-[100px] h-[55px] w-[55px] sm:h-[70px] sm:w-[70px] bg-[#FF9F0D] rounded-md flex justify-center items-center"><img src="Cookie.png" alt="idk" /> </div>
     <div className="lg:w-[102px] lg:h-[100px] h-[55px] w-[55px] sm:h-[70px] sm:w-[70px] bg-[#FF9F0D] rounded-md flex justify-center items-center"><img src="Wine.png" alt="idk" /> </div>
     <p className="font-inter md:text-[18px] text-[12px] md:ml-2 ">Fast Food</p>
     <p className="font-inter md:text-[18px] text-[12px] md:ml-4 ">Lunch</p>
     <p className="font-inter md:text-[18px]  text-[12px] md:ml-4 ">Dinner</p>
    </div>
    
         {/* last box */}
    <div className="parent bg-white md:mt-7 mt-2 md:w-[87%] md:h-[93px] w-[87%] h-[60px] flex lg:mb-48 ">
      <div className="child sm:w-[10%] w-[30px] md:w-[5%] bg-[#FF9F0D] h-[100%]  ">
      </div>
      <div className=" font-inter text-[#FF9F0D] md:text-[48px] text-[28px] font-bold flex items-center md:gap-[20%] md:ml-10">
       30+
       <div className="md:text-[20px] text-[14px] font-inter text-black flex flex-col leading-none">Years of <span className="text-[black] font-bold text-[18px] md:text-[24px] ">Experience</span></div>
      </div>
    </div>
    </div>
    
    {/* main div parent */}
    
       </div>
       <div className="relative bg-black w-full h-[350px] md:h-[400px] flex  items-center justify-evenly sm:mt-28 mt-14 text-white">
  <div className="absolute inset-0 bg-backsand bg-cover opacity-25"></div>

  <div className="flex font-inter text-[20px] justify-around w-full px-2 sm:px-0">
  <div className="flex flex-col text-white  sm:justify-center sm:items-center ">
      <img className="h-auto w-[60px] md:w-[80px] lg:w-auto" src="course.png" alt="pic" />
      <p className="lg:text-[40px] md:text-[30px] text-[24px] font-bold pt-5">420</p>
      <p className="font-bold lg:text-[24px] md:text-[20px] sm:text-[16px] text-[12px] pt-2 ">Professional Chefs</p>
    </div>

    <div className="flex flex-col text-white  sm:justify-center sm:items-center">
      <img className="h-auto w-[60px] md:w-[80px] lg:w-auto" src="course2.png" alt="pic" />
      <p className="lg:text-[40px] md:text-[30px] text-[24px] font-bold pt-5">420</p>
      <p className="font-bold lg:text-[24px] md:text-[20px] sm:text-[16px] text-[12px] pt-2">Items Of Food</p>
    </div>

    <div className="flex flex-col text-white sm:justify-center sm:items-center">
      <img className="h-auto w-[60px] md:w-[80px] lg:w-auto" src="course3.png" alt="pic" />
      <p className="lg:text-[40px] md:text-[30px] text-[24px] font-bold pt-5">420</p>
      <p className="font-bold lg:text-[24px] md:text-[20px] sm:text-[16px] text-[12px]  pt-2 ">Years Of Experienced</p>
    </div>

    <div className="flex flex-col text-white  sm:justify-center sm:items-center">
      <img className="h-auto w-[60px] md:w-[80px] lg:w-auto" src="course4.png" alt="pic" />
      <p className="lg:text-[40px] md:text-[30px] text-[24px] font-bold pt-5">420</p>
      <p className="font-bold lg:text-[24px] md:text-[20px] sm:text-[16px] text-[12px]  pt-2">Happy Customers</p>
    </div>
  </div>
</div>
    
     
       
    </>
    
    
    
    
    
    )
    
    
    }