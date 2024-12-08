import Image from "next/image";
import { BsCartDash } from "react-icons/bs";

export default function Productdetail() {
  return (
    <div className="flex justify-between p-5 sm:p-10">
<div className="  px-6 flex justify-center items-center">
  <Image
    src="/shoe-3.png" 
    alt="Product-shoe"
    width={750} 
    height={750} 
    className="w-[500px] h-[500px]"
  />
</div>

      {/* Right Section with Text and Button */}
      <div className="w-1/2 flex justify-center items-left">
        <div className="flex justify-center items-left flex-col gap-3 p-10">
          <h2 className="text-4xl font-normal w-[70%] text-left">
            Nike Air Force 1 
            PLT.AF.ORM
          </h2>
          <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-left">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
          {/* Price Text Above Button */}
          <p className="text-2xl font-bold text-left pt-3 pb-2">
            ₹ 8 695.00
          </p>
          <button className="flex items-center gap-2 w-[150px] px-4 py-2 bg-black text-white rounded-full hover:white hover:text-black transition duration-200">
            <BsCartDash /> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
