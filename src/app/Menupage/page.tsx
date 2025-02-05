import Footerr from "../components/footer";
import Navv from "../components/navbar2";
export default function Menu(){

    return(
        <>
        <Navv/>
          {/* reusable photo above pages */}
            <div className="bg-backtom object-cover md:h-[410px] h-auto">
             <h1 className="flex justify-center items-center font-bold text-5xl pt-16  md:pt-32 text-white">Our Menu</h1>
             <div className="flex items-center justify-center mt-5 font-inter text-[20px] pb-10 md:pb-0">
                <h1 className="text-white">Home</h1>
                <img src="CaretRight.png" alt="right" />
                <h1 className="text-[#FF9F0D]">Menu</h1>
             </div>

            </div>  
            {/* till here */}
            
            <div className="bg-white">
            <div className="flex flex-col lg:flex-row pt-9 sm:pt-12 md:pt-16  lg:pt-28 w-full xl:px-36 lg:px-2 sm:px-8 px-2 ">
                 
                   
                    <img  className="lg:h-auto lg:w-auto sm:h-[500px] h-[300px] m-auto" src="menupic1.png" alt="" />
                  
                  {/* just making 32 dollars and item list in a flex only this work */}
                  
                   <div className="flex flex-col w-full ">
                    
                   
                    <div className="flex flex-col xl:ml-24 lg:ml-16 space-y-[14px] pt-9 lg:pt-0 ">
                    
                        
                        <div><img src="Coffee.png" alt="" />
                    </div>


                    <h1 className="lg:text-[48px] text-[36px] font-bold text-[#333333]">Starter Menu</h1>
                        <div className="flex">
                           <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Alder Grilled Chinook Salmon</p> 
                           <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">32$</p>
                           
                           </div>
                        <p className="lg:text-[16px] text-[14px] text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">560 CAL</p>



                        {/* order end */}

                        <div className="flex">
                           <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Berries and creme tart</p> 
                           <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">43$</p>
                           
                           </div>
                        <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] "> Gorgonzola, ricotta, mozzarella, taleggio</p>
                        <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">700 CAL</p>
      
            
                         {/* order end */}
     
                         <div className="flex">
                           <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Tormentoso Bush Pizza Pintoage</p> 
                           <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">14$</p>
                           
                           </div>
                        <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] "> Ground cumin, avocados, peeled and cubed</p>
                        <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">1000 CAL</p>


                        {/* last order  */}
                        <div className="flex">
                           <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Spicy Vegan Potato Curry</p> 
                           <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">35$</p>
                           
                           </div>
                        <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] ">Spreadable cream cheese, crumbled blue cheese</p>
                        <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">560 CAL</p>

                    </div>
                </div>
                </div>
   {/* whole complate one section of order */}






   <div className="flex flex-col lg:flex-row pt-9 sm:pt-12 md:pt-16  lg:pt-28 w-full xl:px-36 lg:px-2 sm:px-8 md:px-14 px-2">
                 
                   
                 <img  className="lg:h-auto lg:w-auto sm:h-[500px] h-[300px] m-auto lg:order-2 order-1 xl:ml-24 lg:ml-16" src="menupic2.png" alt="" />
               
               {/* just making 32 dollars and item list in a flex only this work */}
               
                <div className="flex flex-col w-full lg:order-1 order-2 ">
                 
                
                 <div className="flex flex-col  space-y-[14px] pt-9 lg:pt-0 ">
                 
                     
                     <div><img src="Coffee.png" alt="" />
                 </div>


                 <h1 className="lg:text-[48px] text-[36px] font-bold text-[#333333]">Main Course</h1>
                     <div className="flex">
                        <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Optic Big Breakfast Combo Menu</p> 
                        <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">32$</p>
                        
                        </div>
                     <p className="lg:text-[16px] text-[14px] text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                     <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">560 CAL</p>



                     {/* order end */}

                     <div className="flex">
                        <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Cashew Chicken With Stir-Fry</p> 
                        <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">43$</p>
                        
                        </div>
                     <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] "> Gorgonzola, ricotta, mozzarella, taleggio</p>
                     <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">700 CAL</p>
   
         
                      {/* order end */}
  
                      <div className="flex">
                        <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]"> Vegetables & Green Salad</p> 
                        <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">14$</p>
                        
                        </div>
                     <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] "> Ground cumin, avocados, peeled and cubed</p>
                     <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">1000 CAL</p>


                     {/* last order  */}
                     <div className="flex">
                        <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Spicy Vegan Potato Curry</p> 
                        <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">35$</p>
                        
                        </div>
                     <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] ">Spreadable cream cheese, crumbled blue cheese</p>
                     <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">560 CAL</p>

                 </div>
             </div>
             </div>
{/* whole complate one section of order */}




{/* mt-9 m:mt-12 md:mt-16  lg:mt-28 */}
         {/* <div className="bg-black w-auto h-auto  mt-9 m:mt-12 md:mt-16  lg:mt-28 ">
         <div className="bg-backsand object-fill  h-[468px] opacity-25">
             <h1 className="flex justify-center items-center font-bold text-5xl pt-16  md:pt-32">Our Menu</h1>
             <div className="flex items-center justify-center mt-5 font-inter text-[20px] pb-10 md:pb-0">
                <h1 className="text-white">Home</h1>
                <img src="CaretRight.png" alt="right" />
                <h1 className="text-[#FF9F0D]">Menu</h1>
             </div>

            </div>
            </div> */}



{/* reusable image  */}
 
<div className="relative bg-black w-full h-[350px] md:h-[400px] flex  items-center justify-evenly sm:mt-28 mt-14">
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


{/* image ended */}



<div className="flex flex-col lg:flex-row pt-9 sm:pt-12 md:pt-16  lg:pt-28 w-full xl:px-36 lg:px-2 sm:px-8 px-2">
                 
                   
                    <img  className="lg:h-auto lg:w-auto sm:h-[500px] h-[300px] m-auto" src="menupic3.png" alt="" />
                  
                  {/* just making 32 dollars and item list in a flex only this work */}
                  
                   <div className="flex flex-col w-full ">
                    
                   
                    <div className="flex flex-col xl:ml-24 lg:ml-16 space-y-[14px] pt-9 lg:pt-0 ">
                    
                        
                        <div><img src="Coffee.png" alt="" />
                    </div>


                    <h1 className="lg:text-[48px] text-[36px] font-bold text-[#333333]">Dessert</h1>
                        <div className="flex">
                           <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Fig and lemon cake</p> 
                           <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">32$</p>
                           
                           </div>
                        <p className="lg:text-[16px] text-[14px] text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                        <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">560 CAL</p>



                        {/* order end */}

                        <div className="flex">
                           <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Creamy mascarpone cake</p> 
                           <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">43$</p>
                           
                           </div>
                        <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] "> Gorgonzola, ricotta, mozzarella, taleggio</p>
                        <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">700 CAL</p>
      
            
                         {/* order end */}
     
                         <div className="flex">
                           <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Pastry, blueberries, lemon juice</p> 
                           <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">14$</p>
                           
                           </div>
                        <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] "> Ground cumin, avocados, peeled and cubed</p>
                        <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">1000 CAL</p>


                        {/* last order  */}
                        <div className="flex">
                           <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Pain au chocolate</p> 
                           <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">35$</p>
                           
                           </div>
                        <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] ">Spreadable cream cheese, crumbled blue cheese</p>
                        <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">560 CAL</p>

                    </div>
                </div>
                </div>
                {/* 3rd section ended */}

                <div className="flex flex-col lg:flex-row pt-9 sm:pt-12 md:pt-16  lg:pt-28 w-full xl:px-36 lg:px-2 sm:px-8 md:px-14 px-2">
                 
                   
                 <img  className="lg:h-auto lg:w-auto sm:h-[500px] h-[300px] m-auto lg:order-2 order-1 xl:ml-24 lg:ml-16" src="menupic4.png" alt="" />
               
               {/* just making 32 dollars and item list in a flex only this work */}
               
                <div className="flex flex-col w-full lg:order-1 order-2 ">
                 
                
                 <div className="flex flex-col  space-y-[14px] pt-9 lg:pt-0 ">
                 
                     
                     <div><img src="Coffee.png" alt="" />
                 </div>


                 <h1 className="lg:text-[48px] text-[36px] font-bold text-[#333333]">Drinks</h1>
                     <div className="flex">
                        <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Caffè macchiatou</p> 
                        <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">32$</p>
                        
                        </div>
                     <p className="lg:text-[16px] text-[14px] text-[#4F4F4F]">Toasted French bread topped with romano, cheddar</p>
                     <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">560 CAL</p>



                     {/* order end */}

                     <div className="flex">
                        <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Aperol Spritz Capacianno</p> 
                        <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">43$</p>
                        
                        </div>
                     <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] "> Gorgonzola, ricotta, mozzarella, taleggio</p>
                     <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">700 CAL</p>
   
         
                      {/* order end */}
  
                      <div className="flex">
                        <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Caffe Latte Campuri</p> 
                        <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">14$</p>
                        
                        </div>
                     <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] "> Ground cumin, avocados, peeled and cubed</p>
                     <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">1000 CAL</p>


                     {/* last order  */}
                     <div className="flex">
                        <p className="font-bold lg:text-[24px] text-[20px] text-[#333333] cursor-pointer hover:text-[#FF9F0D]">Tormentoso BushTea Pintoage</p> 
                        <p className="text-[#FF9F0D] lg:text-[24px] text-[20px] font-bold ml-auto">35$</p>
                        
                        </div>
                     <p className="lg:text-[16px] text-[14px] text-[#4F4F4F] ">Spreadable cream cheese, crumbled blue cheese</p>
                     <p className="lg:text-[16px] text-[12px] text-[#828282] border-b-[1px] border-b-[#E0E0E0] ">560 CAL</p>

                 </div>
             </div>
             </div>
{/* whole complate one section of order */}



<h1 className="text-center font-inter text-[18px] text-[#333333] md:mt-28 mt-10">Partners & Clients</h1>
<h1 className="font-bold md:text-[48px] sm:text-[30px] text-[22px] text-center text-[#333333] ">We work with the best people</h1>
<div className="flex justify-evenly md:mb-28 mb-10 w-auto h-auto mt-10">
<div>
<img className="" src="partner1.png" alt="partners " /></div>
<div><img src="partner3.png" alt="partners" /></div>
<div><img src="partner2.png" alt="partners" /></div>
<div><img src="partner4.png" alt="partners" /></div>
<div><img src="partner5.png" alt="partners" /></div>
<div><img src="partner6.png" alt="partners" /></div>


</div>
<Footerr/>
{/* most imp bg-white div */}
    </div>        
        
       
        </>
    )
}