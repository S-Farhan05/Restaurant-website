import Navv from "../components/navbar2";
import Image from "next/image";
import Footerr from "../components/footer";
import Link from "next/link";
 const Shop = () => {
const Shopitems =[
{id :1 , img : "/shope1.png",name:"Fresh Lime" ,text1 :"$38.00" ,text2:"$45.00"},
{id :2 , img : "/shope2.png",name:"Chocolate Muffin" ,text1 :"$28.00" ,},
{id :3 , img : "/shope3.png",name:"Burger" ,text1 :"$21.00" ,text2:"$45.00"},
{id :4 , img : "/shope4.png",name:"Country Burger" ,text1 :"$45.00"},
{id :5 , img : "/shope5.png",name:"Drink" ,text1 :"$23.00" ,text2:"$45.00"},
{id :6 , img : "/shope6.png",name:"Pizza" ,text1 :"$43.00" ,},
{id :7 , img : "/shope7.png",name:"Cheese Butter" ,text1 :"$10.00" ,},
{id :8 , img : "/shope8.png",name:"Sandwiches" ,text1 :"$25.00" ,},
{id :9 , img : "/shope9.png",name:"Chicken Chup" ,text1 :"$12.00" ,},
{id :10, img : "/shope4.png",name:"Cheese Butter" ,text1 :"$10.00" ,},
{id :11 ,img : "/shope5.png",name:"Sandwiches" ,text1 :"$25.00" ,},
{id :12 ,img : "/shope6.png",name:"Chicken Chup" ,text1 :"$12.00" ,},
{id :13 ,img : "/shope7.png",name:"Country Burger" ,text1 :"$45.00"},
{id :14, img : "/shope8.png",name:"Drink" ,text1 :"$23.00" ,text2:"$45.00"},
{id :15 ,img : "/shope9.png",name:"Pizza" ,text1 :"$43.00" ,},





];

return(

    <>
    <Navv/>
    <div className="bg-backtom object-cover md:h-[410px] h-auto">
             <h1 className="flex justify-center items-center font-bold text-5xl pt-16  md:pt-32">Our Menu</h1>
             <div className="flex items-center justify-center mt-5 font-inter text-[20px] pb-10 md:pb-0">
                <h1 className="text-white">Home</h1>
                <img src="CaretRight.png" alt="right" />
                <h1 className="text-[#FF9F0D]">Shop</h1>
             </div>
            </div> 
            
            <div className="bg-white h-auto text-[#333333]">

                {/* wtf i need to make Menu instead im making cheackbox  */}
               {/* <div className="mx-auto max-w-full">
                <ul>
                <li className="flex items-center bg-gray-600 ">
                <input type="checkbox" className="h-4 w-4 text-blue-800"/>
                <span>Name</span>
                
                </li>
                </ul>
                </div> */}

                <div className="pt-28">
            <div className="flex text-[20px] font-inter sm:pl-4 pl-2 md:pl-16 lg:pl-24">
                         
                    <div className="flex items-center ">
                <label htmlFor="sort" className="md:mx-2 md:text-[20px] text-[16px]">Sort By:</label>
                       <select defaultValue="default" id="sort" className=" flex items-center border-[1px] border-[#E0E0E0] rounded-md  md:py-2 md:px-4 py-1 px-2 text-[#BDBDBD] md:text-[18px] text-[14px] md:w-52 w-24">
                   <option value="default"  hidden >
                               Newest
                      </option>
                   <option value="newest">Newest</option>
                   <option value="oldest">Oldest</option>
                   <option value="popular">Most Popular</option>
               </select>
              </div>

              <div className="flex items-center ">
                <label htmlFor="sort" className="md:mx-2 md:text-[20px] text-[16px] pl-4">Show :</label>
                       <select defaultValue="default" id="sort" className=" flex items-center border-[1px] border-[#E0E0E0] rounded-md  md:py-2 md:px-4 py-1 px-2 text-[#BDBDBD] md:text-[18px] text-[14px] md:w-52 w-24">
                   <option value="default"  hidden >
                              Default
                      </option>
                   <option value="newest">above 20$</option>
                   <option value="oldest">above 30$</option>
                   <option value="popular">above 50$</option>
               </select>
              </div>
              </div>
              </div>

              {/* grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 */}
     <div className="flex flex-col md:flex-row">
         <div className="grid md:grid-cols-3 grid-cols-2 xl:ml-auto xl:gap-5 gap-3 mx-2 xl:mx-0 mt-5 md:order-1 order-2 ">
                  {Shopitems.map((Shopitems) => (
                    <div key={Shopitems.id}  >
                      {/* Image of the food item */}
                      <div className="relative group">
                      <Image
                        src={Shopitems.img}
                        alt={Shopitems.text1}
                        width={500}
                        height={500}
                        className="w-[312px] h-auto object-cover rounded-lg "
                        
                        
                      />
                       <div className="absolute flex justify-center items-center inset-0 opacity-0 group-hover:opacity-100 w-full h-auto gap-3  transition-opacity duration-700">
                          <div className="  bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer "><img src="Project Status.png" alt="project" /></div>
                          <div className=" bg-[#FF9F0D] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Tote.png" alt="project" /></div>
                          <div className=" bg-[#FFFFFF] rounded-sm w-[41px] h-[34px] flex justify-center items-center cursor-pointer"><img src="Heart.png" alt="project" /></div>
                          
                        </div>
                      </div>
                      
                       <div className="font-inter font-bold text-[18px] mt-2">{Shopitems.name}</div>
                       <div className="flex font-inter text-[16px] space-x-3 mt-2 " >
                      {Shopitems.text1 && <h1 className="text-[#FF9F0D]">{Shopitems.text1}</h1>}
                      {Shopitems.text2 && <h1 className="text-[#828282] line-through">{Shopitems.text2}</h1>}
                       
                     
                
                        

                    </div>

                      </div>))}
                     
                    
                      
                      </div>
                      
                      <div className="w-auto mx-auto flex flex-col xl:mt-10 lg:mt-6 md:mt-4 border-2  lg:p-6 md:p-2 p-4 sm:p-16 md:order-2 order-1 mb-auto mt-8">
                      <div className="bg-[#FF9F0D1A] w-[248px] h-[46px] text-[#828282] relative flex items-center px-4">
                  <span>Search Product</span> 
                    <div className="w-[46px] h-[46px] absolute right-0 bg-[#FF9F0D] flex justify-center items-center">
                      <img src="MagnifyingGlass.png" alt="Magnifier" />
                    </div>
                 </div>

                 <div className=" max-w-full mt-6 space-y-8">
                  <h1 className="text-[#333333] font-bold text-[20px]">Category</h1>
                <ul className="space-y-4">
                <li className="flex items-center ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-blue-800 " />
                  <span className="text-[#333333] text-[18px]">Sandwiches</span>
                       </label>
                  </li>
                  <li className="flex items-center ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-blue-800 " />
                  <span className="text-[#333333] text-[18px]">Burger</span>
                       </label>
                  </li>

                  <li className="flex items-center ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-blue-800 " />
                  <span className="text-[#333333] text-[18px]">Chicken Chup</span>
                       </label>
                  </li>

                  <li className="flex items-center ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-blue-800 " />
                  <span className="text-[#333333] text-[18px]">Drink</span>
                       </label>
                  </li>

                
                  <li className="flex items-center ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-blue-800 " />
                  <span className="text-[#333333] text-[18px]">Pizza</span>
                       </label>
                  </li>

                  <li className="flex items-center ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-blue-800 " />
                  <span className="text-[#333333] text-[18px]">Thi</span>
                       </label>
                  </li>


                  <li className="flex items-center ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-blue-800 " />
                  <span className="text-[#333333] text-[18px]">Non Veg</span>
                       </label>
                  </li>

                  <li className="flex items-center ">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="checkbox" className="h-4 w-4 text-blue-800 " />
                  <span className="text-[#333333] text-[18px]">Uncategorized</span>
                       </label>
                  </li>


                </ul>
                </div> 

                  <div className="bg-backshop relative xl:h-[286px] md:h-[240px] w-auto mt-4 ">
                    <div className="flex flex-col font-inter font-bold text-[#FFFFFF] px-6 pt-6 space-y-1">
                      <p className="text-[16px]">Perfect Taste</p>
                      <p className="text-[20px] ">Classic Restaurant</p>
                      <p className="text-[#FF9F0D]">45.00$</p>
                      <div className="flex lg:pt-[60%] pt-[40%]">
                        <p className="font-inter text-[16px] text-[#FFFFFF] ">Shop Now</p>
                        <img className="px-2" src="ArrowCircleRight.png" alt="arrow right" />
                      </div>
                
                    </div>
                   </div>{/* closing of pic */}
                   <p className=" font-bold text-[#333333] text-[20px] py-4">Filter By Price</p>
                   <div className="flex flex-col space-y-3 ">
                     <label htmlFor="priceRange"></label>
                      <input 
                      id="priceRange"
                      type="range" 
                      min="0" 
                      max="100" 
                       defaultValue="50" className="w-full h-[4px] bg-[#FF9F0D] rounded-lg appearance-none cursor-pointer outline-none"
                       />
                   <div className="flex font-inter text-[#0D0D0D] opacity-60 justify-between">
                    <p>From $0 to $8000</p>
                    <p>Filter</p>
                   </div>
                  </div>  {/*pic and filter end */}






                  <div className="pizza flex flex-col">
                    <p className="font-bold text-[20px] text-[#333333] py-3">Latest Products</p>
                    <div className="flex py-2 ">
                      <img className="h-[65px] w-[72px]" src="Pizzaleft.png" alt="" />
                      <div className="flex flex-col space-y-2 ml-5">
                      <p className="text-[16px] text-[#4F4F4F]">Pizza</p>
                      <img src="star2.png" alt="ratings" />
                      <p className="text-[14px] text-[#4F4F4F]">$35.00</p></div>
                      
                      </div>
                      <div className="flex py-2">
                      <img className="h-[65px] w-[72px]" src="Pizzaleft.png" alt="" />
                      <div className="flex flex-col space-y-2 ml-5">
                      <p className="text-[16px] text-[#4F4F4F]">Pizza</p>
                      <img src="star2.png" alt="ratings" />
                      <p className="text-[14px] text-[#4F4F4F]">$35.00</p></div>
                      
                      </div>
                      <div className="flex py-2">
                      <img className="h-[65px] w-[72px]" src="Pizzaleft.png" alt="" />
                      <div className="flex flex-col space-y-2 ml-5">
                      <p className="text-[16px] text-[#4F4F4F]">Pizza</p>
                      <img src="star2.png" alt="ratings" />
                      <p className="text-[14px] text-[#4F4F4F]">$35.00</p></div>
                      
                      </div>
                      <div className="flex py-2">
                      <img className="h-[65px] w-[72px]" src="Pizzaleft.png" alt="" />
                      <div className="flex flex-col space-y-2 ml-5">
                      <p className="text-[16px] text-[#4F4F4F]">Pizza</p>
                      <img src="star2.png" alt="ratings" />
                      <p className="text-[14px] text-[#4F4F4F]">$35.00</p></div>
                      
                      </div>
                
            
                  </div>  
                  {/* pizza div closing */}

               <div className="mt-8">
                <h1 className="font-bold text-[20px] text-[#333333]">Product Tags</h1>
                <div className="flex-col space-y-4 mt-6">
                  <div className="text-[16px] font-inter flex gap-6">
                    <p className="border-b-[#F2F2F2] hover:text-[#FF9F0D] hover:border-b-[#FF9F0D] border-b-2 cursor-pointer">Services</p>
                    <p className="border-b-[#F2F2F2] border-b-2 cursor-pointer">Our Menu</p>
                    <p className="border-b-[#F2F2F2] border-b-2 cursor-pointer">Pizza</p>
                  </div>

                  <div className="text-[16px] font-inter flex gap-6">
                    <p className="border-b-[#F2F2F2]  hover:text-[#FF9F0D] hover:border-b-[#FF9F0D] border-b-2 cursor-pointer ">Cupcake</p>
                    <p className="border-b-[#F2F2F2]  hover:text-[#FF9F0D] hover:border-b-[#FF9F0D] border-b-2 cursor-pointer ">Burger</p>
                    <p className="border-b-[#F2F2F2]  hover:text-[#FF9F0D] hover:border-b-[#FF9F0D] border-b-2 cursor-pointer ">Cookies</p>
                  </div>


                  <div className="text-[16px] font-inter flex gap-6">
                    <p className="border-b-[#F2F2F2] border-b-2 cursor-pointer  hover:text-[#FF9F0D] hover:border-b-[#FF9F0D]">Our Shop</p>
                    <p className="border-b-[#F2F2F2] border-b-2 cursor-pointer  hover:text-[#FF9F0D] hover:border-b-[#FF9F0D]">Tandoori Chicken</p>

                  </div>


                </div>
               </div>




             </div>      {/*main full right coloum div */}
                 








                 {/* flex property    colums */}
         </div>
      {/* just back white */}

      <div className="flex justify-center items-center py-32 space-x-4">
        <div className="w-[50px] h-[50px] border-2 border-[#F2F2F2] flex justify-center items-center hover:bg-[#FF9F0D]">
          <img src="doublearrow.png" alt="arrow" />
        </div>
        <Link href={"/Shoplistpage"}>  <div className="w-[50px] h-[50px] border-2 border-[#F2F2F2] flex justify-center  text-[#FF9F0D] items-center hover:bg-[#FF9F0D] hover:text-white cursor-pointer ">
         1
        </div></Link>
        <Link href={"/ShopDetailspage"}><div className="w-[50px] h-[50px] border-2 border-[#F2F2F2] flex justify-center text-[#FF9F0D]  items-center hover:bg-[#FF9F0D] hover:text-white cursor-pointer">
         2
        </div></Link>

        <Link href={"/Shoplistpage"}> <div className="w-[50px] h-[50px] border-2 border-[#F2F2F2] flex justify-center text-[#FF9F0D]  items-center  hover:bg-[#FF9F0D] hover:text-white cursor-pointer">
         3
        </div></Link>
        <div className="w-[50px] h-[50px] border-2 border-[#F2F2F2] flex justify-center  items-center hover:bg-[#FF9F0D]">
          <img src="doublearrow2.png" alt="arrow" />
        </div>

      </div>
 </div> 
 <Footerr/>
 </>
)   
}








export default Shop