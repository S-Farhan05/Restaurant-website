"use client"
import Navv from "../components/navbar2";
import { useState } from "react";
import Link from "next/link";
import Footerr from "../components/footer";
export default function Details(){

  let[Count , Setcount] =useState(1);

 const increaseCount = () =>{
  if(Count<10)
  {
   Setcount(Count+1);
   
  }
 }

 const decreaseCount = () =>{
  if(Count>1)
  {
    Setcount(Count - 1);
  }
 }

  
  

    return(

        <>
       <Navv/>
       <div className="bg-backtom object-cover md:h-[410px] h-auto">
             <h1 className="flex justify-center items-center font-bold text-5xl pt-16  md:pt-32">Shop details</h1>
             <div className="flex items-center justify-center mt-5 font-inter text-[20px] pb-10 md:pb-0">
                <h1 className="text-white">Home</h1>
                <img src="CaretRight.png" alt="right" />
                <h1 className="text-[#FF9F0D]">Shop details</h1>
             </div>
            </div> 

            {/* reusbale photo again */}

            <div className="bg-white text-black ">
              <div className="grid lg:grid-cols-2 grid-cols-1 lg:pt-28 pt-12">
                <div className="flex xl:ml-24">
                  <div className="flex flex-col xl:space-y-6 md:space-y-6 space-y-3 ml-2 md:ml-auto lg:ml-2" >
                    <div><img src="Sdetails1.png" alt="pic" /></div>
                    <div><img src="Sdetails2.png" alt="pic" /></div>
                    <div><img src="Sdetails3.png" alt="pic" /></div>
                    <div><img src="Sdetails4.png" alt="pic" /></div>

                  </div>
                  <div className="lg:ml-6 mx-2 md:mx-auto lg:mx-0"><img src="Sdetails5.png" alt="pic" /></div>
                

                </div>
                <div className="flex flex-col xl:mx-24 lg::mx-14 md:mx-2">
                  <div className="flex justify-between rounded-md mt-7 lg:mt-0 mx-3 md:mx-10 lg:mx-0">
                    <div className="bg-[#FF9F0D]">
                      <p className="text-[14px] text-white font-inter px-4 py-2">In stock</p>
                    </div>
                    <div  className="text-[#828282] flex items-center gap-4 ">
                    <Link href={"/Shoplistpage"}> <div className="flex gap-2">
                        <img src="ArrowRight.png" alt="arrow" />
                        <p className="text-[18px] hover:text-[#FF9F0D]">Prev</p>

                      </div></Link>
                      
                      <Link href={""}><div className="flex gap-2">
                      <p className="text-[18px] hover:text-[#FF9F0D]">Next</p> 
                      <img src="ArrowLeft.png" alt="arrow" />
                   
                      </div></Link>

                    </div>
                  </div> 
                  {/* only yellow button and previous text close */}

                  <div className="border-b-2 lg:pb-6 pb-3 mt-3 font-inter mx-4 md:mx-10 lg:mx-0">
                    <h1 className="xl:text-[48px] lg:text-[34px] text-[27px] font-bold mt-8 lg:mt-0">Yummy Chicken Chup</h1>
                    <p className="text-[#4F4F4F] pt-2 xl:text-[18px] lg:text-[14px] text-[14px] md:text-[16px] ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.</p>
                  </div>

                  <div className="xl:space-y-5 space-y-4 mt-3 mx-4 lg:mx-0 md:mx-10">
                    <p className="font-bold xl:text-[32px] lg:text-[24px] text-[18px] text-[#333333] pl-1 lg:pl-0 " >54.00$  </p>
                    <div className="flex text-[#828282] h-auto items-center">
                      <div><img src="Star 5.png" alt="" /></div>
                      <div className="md:text-[16px] text-[12px] font-inter flex ">
                        <p className="border-x-2 border-x-[#A9A9A9] lg:px-4 lg:mx-4 px-2 mx-2">5.0 Rating</p>
                        <p>22 Review</p>
                      </div>

                    </div>
                    <h1 className="lg:text-[18px] text-[14px] text-[#333333]">Dictum/cursus/Risus</h1>
                    <div className="wholecontainer flex gap-4 border-b-2 pb-6">

                      <div className="buttonholder grid grid-cols-3 items-center lg:w-[181px] w-28 border-2 border-[#828282] justify-between xl:h-[50px] h-[42px]">
                        <button className="text-[#828282] px-2 text-[28px] cursor-pointer disabled:opacity-45 hover:bg-gray-400 h-full" 
                        onClick={decreaseCount}
                        disabled={Count === 1}
                        >-</button>
                        <div className=" items-center lg:text-[28px] text-[18px] flex justify-center  border-r-2 border-r-[#828282] border-l-2 border-l-[#828282] h-full ">{Count}</div>
                        <button className="text-[#828282] text-[28px] px-2 cursor-pointer disabled:opacity-45 hover:bg-gray-400 h-full" 
                        onClick={increaseCount}
                        disabled={Count === 10}
                        >+</button>
                      </div>
                      

                      <Link href={"/ShoppingCartpage"}><div className=" lg:w-[181px] w-28 text-white xl:h-[50px] bg-[#FF9F0D] flex items-center cursor-pointer lg:gap-4  gap-2 lg:px-3 px-1 h-[42px] hover:bg-red-400">
                        <img src="bag.png" alt="bag" />
                        <p className="font-inter lg:text-[18px] text-[14px] ">Add to cart</p>


                      </div></Link>
                      </div>
                      {/* container end border below */}


                   <div  className="xl:text-[18px] text-[16px] font-inter flex items-center gap-6">
                    <div className="flex text-[#4F4F4F] gap-2 items-center cursor-pointer">
                      <img src="Heart.png" alt="dill" />
                      <p>Add to Wishlist</p>

                    </div>
                    <div className="flex text-[#4F4F4F] gap-2 items-center cursor-pointer">
                       <img src="Project Status.png" alt="dill" />
                       <p>Compare</p>  
                    </div>

                   </div>
                   <div className="flex xl:text-[18px] text-[16px] font-inter">
                     <p className="text-[#333333]">Category:</p>
                     <p className="text-[#4F4F4F]">Pizza</p>

                   </div>
                   <div className="flex xl:text-[18px] text-[16px] font-inter">
                     <p className="text-[#333333]">Tag:</p>
                     <p className="text-[#4F4F4F]">Our Shop</p>

                   </div>
                   <div className="flex gap-5 border-b-2 pb-4">
                    <p className="font-inter xl:text-[18px] text-[16px]">Share : </p>
                    <div  className="cursor-pointer"><img src="icon1.png" alt="" /></div>
                    <div className="cursor-pointer"><img src="icon2.png" alt="" /></div>
                    <div className="cursor-pointer"><img src="icon3.png" alt="" /></div>
                    <div className="cursor-pointer"><img src="icon4.png" alt="" /></div>
                    <div className="cursor-pointer"><img src="icon5.png" alt="" /></div>


                   </div>
                    




                  </div>


                </div>

              </div>
                    
                    
                    
                    <div className="  mt-16 flex items-center lg:ml-24 md:ml-12 ml-4 gap-4"> 
                        <div className="font-inter lg:text-[18px] text-[14px] lg:w-[165px] w-28 text-white h-[50px] bg-[#FF9F0D] flex items-center justify-center cursor-pointer ">Description</div>
                        <p className="font-inter text-[16px]"> Reviews (24)</p>
                      </div>
                      <div className="font-inter sm:text-[16px] text-[14px] text-[#828282] lg:mx-24 space-y-8 sm:mx-12 mx-4">
                        <p className="pt-9">Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis justo, sit amet interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.</p>
                        <p>
                        Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. Sed at dolor quis nisi rutrum accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis vehicula fermentum. Integer eu vulputate justo. Aenean pretium odio vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
                        </p>
                      </div>

                      <div className="lg:ml-24 md:ml-12 ml-4">
                        <h2 className="text-[18px] text-[#4F4F4F] mt-8">Key Benefits</h2>
                        <ul className="font-inter text-[14px] text-[#4F4F4F] list-disc pl-5 pt-5 space-y-5">
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </li>

                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </li>
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </li>
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </li>
                          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          </li>
                        </ul>
                      </div>
                      

                      <div className="flex lg:ml-24 md:ml-12 ml-4 mt-16 items-center justify-between">
                      <h1 className="md:text-[32px] text-[24px] font-bold ">Similar Products</h1>
                      <div className="flex gap-2">
                        <Link href={"/Shoplistpage"}> <div><img className="rounded-2xl p-1 bg-[#FAF7F2] object-cover" src="ArrowRight.png" alt="" /></div></Link>

                        <Link href={"/"}><div ><img className="rounded-2xl p-1 bg-[#FF9F0D] object-cover" src="Arrowleft.png" alt="" /></div></Link>

                      </div>
                      
                        

                     
                      
                      </div>

                      <div className="flex flex-col md:flex-row lg:mx-24 lg:gap-10 mt-10 pb-20 md:gap-5 md:mx-2 mx-4 " >
                      <div className="relative group ">
                        <img className="w-[312px] h-auto object-cover rounded-lg " src="shope1.png" alt="" />
                          
                          
                          
                           <div className="absolute flex justify-center items-center inset-0 opacity-0 group-hover:opacity-100 w-full h-auto gap-3  transition-opacity duration-700">
                              <div className="  bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer ">
                                
                                <img src="Project Status.png" alt="project" /></div>
                              <div className=" bg-[#FF9F0D] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Tote.png" alt="project" /></div>
                              <div className=" bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Heart.png" alt="project" /></div>
                              
                            </div>
                            <div className="flex  flex-col">
                           <div className="font-inter font-bold text-[18px] mt-2">Fresh Lime</div>
                           <div className="flex font-inter text-[16px] space-x-3 mt-2 " >
                        <  h1 className="text-[#FF9F0D]">$38.00</h1>
                           <h1 className="text-[#828282] line-through">$45.00</h1></div>
                           
                         
                    
                            
    
                        </div>

                          </div>


                          <div className="relative group flex-col">
                        <img className="w-[312px] h-auto object-cover rounded-lg " src="shope2.png" alt="" />
                          
                          
                          
                           <div className="absolute flex justify-center items-center inset-0 opacity-0 group-hover:opacity-100 w-full h-auto gap-3  transition-opacity duration-700">
                              <div className="  bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer ">
                                
                                <img src="Project Status.png" alt="project" /></div>
                              <div className=" bg-[#FF9F0D] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Tote.png" alt="project" /></div>
                              <div className=" bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Heart.png" alt="project" /></div>
                              
                            </div>
                            <div className="flex  flex-col">
                           <div className="font-inter font-bold text-[18px] mt-2">Chocolate Muffin</div>
                           <div className="flex font-inter text-[16px] space-x-3 mt-2 " >
                        <  h1 className="text-[#FF9F0D]">$38.00</h1>
                           <h1 className="text-[#828282] line-through">$45.00</h1></div>
                           
                         
                    
                            
    
                        </div>
                        
                          </div>


                          <div className="relative group flex-col">
                        <img className="w-[312px] h-auto object-cover rounded-lg " src="shope3.png" alt="" />
                          
                          
                          
                           <div className="absolute flex justify-center items-center inset-0 opacity-0 group-hover:opacity-100 w-full h-auto gap-3  transition-opacity duration-700">
                              <div className="  bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer ">
                                
                                <img src="Project Status.png" alt="project" /></div>
                              <div className=" bg-[#FF9F0D] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Tote.png" alt="project" /></div>
                              <div className=" bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Heart.png" alt="project" /></div>
                              
                            </div>
                            <div className="flex  flex-col">
                           <div className="font-inter font-bold text-[18px] mt-2">Fresh Lime</div>
                           <div className="flex font-inter text-[16px] space-x-3 mt-2 " >
                        <  h1 className="text-[#FF9F0D]">$21.00</h1>
                           </div>
                           
                         
                    
                            
    
                        </div>
                        
                          </div>
                          

                          <div className="relative group flex-col">
                        <img className="w-[312px] h-auto object-cover rounded-lg " src="shope1.png" alt="" />
                          
                          
                          
                           <div className="absolute flex justify-center items-center inset-0 opacity-0 group-hover:opacity-100 w-full h-auto gap-3  transition-opacity duration-700">
                              <div className="  bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer ">
                                
                                <img src="Project Status.png" alt="project" /></div>
                              <div className=" bg-[#FF9F0D] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Tote.png" alt="project" /></div>
                              <div className=" bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Heart.png" alt="project" /></div>
                              
                            </div>
                            <div className="flex  flex-col">
                           <div className="font-inter font-bold text-[18px] mt-2">Fresh Lime</div>
                           <div className="flex font-inter text-[16px] space-x-3 mt-2 " >
                        <  h1 className="text-[#FF9F0D]">$38.00</h1>
                           <h1 className="text-[#828282] line-through">$45.00</h1></div>
                           
                         
                    
                            
    
                        </div>
                        
                          </div>
                          
                      
    
                            
                     
                      



       

                  


               
          
           
  
   
                          </div> 
                          {/* images flex */}
  



                          </div>
                {/* whole container */}
                <Footerr/>
            
        </>
    )
}