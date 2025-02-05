import Footerr from "../components/footer";
import Navv from "../components/navbar2";
import Image from "next/image";

const Shopss = () => {
    const Chefs =[
    {id :1 , img : "/c1.png",name:"Tahmina Rumi" ,text1 :"Chef" ,},
    {id :2 , img : "/c2.png",name:"Jorina Begum" ,text1 :"Chef" ,},
    {id :3 , img : "/c3.png",name:"M.Mohammad" ,text1 :"Chef" ,},
    {id :4 , img : "/c4.png",name:"Munna Kathy" ,text1 :"Chef"},
    {id :5 , img : "/c5.png",name:"Tahmina Rumi" ,text1 :"Chef" ,},
    {id :6 , img : "/c6.png",name:"Bisnu devgon" ,text1 :"Chef" ,},
    {id :7 , img : "/c7.png",name:"Motin Molladsf" ,text1 :"Chef" ,},
    {id :8 , img : "/c8.png",name:"William Rumi" ,text1 :"Chef" ,},
    {id :9 , img : "/c9.png",name:"Kets william roy" ,text1 :"Chef" ,},
    {id :10, img : "/c10.png",name:"Mahmud kholil" ,text1 :"Chef" ,},
    {id :11 ,img : "/c11.png",name:"Ataur Rahman" ,text1 :"Chef",},
    {id :12 ,img : "/c12.png",name:"Monalisa holly" ,text1 :"Chef" ,},
   
    
    
    
    
    
    ];
return(
    <>
    <Navv/>

    <div className="bg-backtom object-cover md:h-[410px] h-auto">
             <h1 className="flex justify-center items-center font-bold text-5xl pt-16  md:pt-32">Our Chef</h1>
             <div className="flex items-center justify-center mt-5 font-inter text-[20px] pb-10 md:pb-0">
                <h1 className="text-white">Home</h1>
                <img src="CaretRight.png" alt="right" />
                <h1 className="text-[#FF9F0D]">Chef</h1>
             </div>
            </div> 

            
            
            
            
            <div className="bg-white text-black" >
            <div className=" grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 flex-wrap lg:mx-20 gap-4 pt-24 mb-20">
            
                 {Chefs.map((Chefs) => (
                  <div key={Chefs.id} className="flex flex-col items-center pb-4 " >
                <div>
                 <Image
                   src={Chefs.img}
                   alt={Chefs.text1}
                  width={312}
                   height={380}
                 className="w-[312px] h-auto object-cover rounded-lg " />
                </div>
                <div>
                <h1 className="text-[20px] font-bold">{Chefs.name}</h1></div>
                <div><h1 className="font-inter text-[18px] text-[#333333]" >{Chefs.text1}</h1></div>
                                      

                
          </div>))}

            
            </div>
 <Footerr/>
            </div> 
   
   


    </>
)

}
export default Shopss