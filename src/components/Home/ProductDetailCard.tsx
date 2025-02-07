
"use client";
import { useState } from "react";
import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import { BsCartPlus } from "react-icons/bs";
import toast from "react-hot-toast";

interface ProductDetailCardProps {
  productName: string;
  description: string;
  price: number;
  imageUrl: string;
  colors: string[];
  inventory: number;
  productId: string;
}

const ProductDetailCard = ({
  productName,
  description,
  price,
  imageUrl,
  colors,
  inventory,
  productId,
}: ProductDetailCardProps) => {
  const { addItem } = useCart(); 
  const [selectedColor, setSelectedColor] = useState<string>(colors[0]);

  const handleAddToCart = () => {
    if (inventory > 0) {
      addItem({
        id: productId,
        name: productName,
        price,
        inventory,
        quantity: 1,
        color: selectedColor,
        imageUrl,
       
      });

      toast.success(`${productName} (${selectedColor}) added to cart!`);
    } else {
      toast.error("This product is out of stock.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-20 py-24">
   
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src={imageUrl}
          alt={productName}
          width={550}
          height={500}
          className="w-full sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
      </div>

   
      <div className="w-full md:w-1/2  flex flex-col justify-center p-2 md:p-6">
        <h2 className="text-2xl sm:text-4xl  font-bold">{productName}</h2>

        <div className="flex gap-5 mt-3">
          <p className="text-lg sm:text-xl font-bold">Rs. {price}</p>
          <p className="text-sm sm:text-base font-medium underline">Stock: {inventory}</p>
        </div>

        <p className="mt-2 text-gray-700 w-full sm:w-96">{description}</p>

  
        <div className="flex items-center gap-3 mt-4">
          <p className="font-semibold text-lg text-gray-600">Color:</p>
          <div className="flex gap-2">
            {colors.map((color, index) => {
              const colorClass = {
                White: "bg-white",
                Black: "bg-black",
                Gray: "bg-gray-300",
                Teal: "bg-teal-400",
                Red: "bg-red-400",
                Blue: "bg-blue-500",
                Pink: "bg-pink-300",
                Purple: "bg-purple-400",
                Yellow: "bg-yellow-500",
                Orange: "bg-orange-300"
              }[color] || "bg-gray-200"; 

              return (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`h-6 w-6 rounded-full ${colorClass} border ${
                    selectedColor === color ? "border-2 border-black" : "border-gray-400"
                  }`}
                  aria-label={`Select ${color}`}
                />
              );
            })}
          </div>
        </div>

  
        <button
          onClick={handleAddToCart}
          disabled={inventory === 0}
          className={`flex items-center gap-2 w-[150px] mt-5 px-4 py-3 rounded-full transition ${
            inventory === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-gray-700"
          }`}
        >
          <BsCartPlus size={18} />
          {inventory === 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
