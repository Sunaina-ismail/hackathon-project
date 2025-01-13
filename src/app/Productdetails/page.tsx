
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

export default function Productdetail() {
  return (
    <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-20 py-32 sm:py-16 md:py-20">
     
      <div className="w-full md:w-1/2 flex justify-center items-center px-2 sm:px-6">
        <Image
          src="/shoe-3.png"
          alt="Product-shoe"
          width={750}
          height={750}
          className="w-full sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px]"
        />
      </div>

      
      <div className="w-full md:w-1/2 flex justify-center md:justify-start items-center md:items-start py-8 md:py-24">
        <div className="flex flex-col gap-3 p-4 sm:p-6 md:p-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold w-full sm:w-[80%] md:w-[70%] text-center md:text-left">
            Nike Air Force 1 PLT.AF.ORM
          </h2>
          <p className="leading-5 w-full  sm:w-[80%] pt-3 pb-2 text-center md:text-left">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
       
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left pt-3 pb-2">
            ₹ 8 695.00
          </p>
         
          <button className="flex items-center gap-2 w-[150px] px-3 py-3 sm:px-4 sm:py-2 bg-black text-white rounded-full   hover:bg-gray-700 transition duration-200 mx-auto sm:mx-0">
  <span><BsCartDash /></span> Add To Cart
</button>
        </div>
      </div>
    </div>
  );
}

