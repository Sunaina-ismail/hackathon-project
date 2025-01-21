"use client";
import { useCart } from "@/app/context/cartContext";
import Image from "next/image";
import { BsCartDash } from "react-icons/bs";
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
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    if (inventory > 0) {
      addToCart({
        id: productId,
        name: productName,
        price,
        inventory,
        quantity: 1,
        color: colors[0],
        imageUrl,
      });

      toast.success(`${productName} Added to cart!`);
    } else {
      toast.error("Sorry, this product is out of stock.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-between px-4 sm:px-8 md:px-20 py-32 sm:py-16 md:py-20">
      {/* Image Section */}
      <div className="w-full md:w-auto flex justify-center items-center px-2 sm:px-6">
        <Image
          src={imageUrl}
          alt={productName}
          width={750}
          height={600}
          className="w-full sm:w-[400px] md:w-[550px] h-[300px] sm:h-[400px] md:h-[500px]"
        />
      </div>

      <div className="w-full md:w-2/3 flex justify-center md:justify-start items-center md:items-start py-8 md:py-24">
        <div className="flex flex-col gap-3 p-4 sm:p-6 md:p-10">
          <h2 className="text-xl sm:text-3xl font-semibold w-full text-center md:text-left">
            {productName}
          </h2>
          <p className="pt-3 pb-2 px-4 md:px-0 w-72 md:w-96 md:text-lg text-center md:text-left">
            {description}
          </p>

          <div className="flex px-6 sm:mx-0 mx-auto md:px-0 gap-y-2 gap-x-2 md:pb-0 md:gap-y-2">
            <p className="font-semibold text-lg text-gray-600">Color:</p>
            <div className="flex gap-2">
              {colors.map((color, index) => {
                const colorClass =
                  color === "White"
                    ? "bg-white"
                    : color === "Black"
                    ? "bg-black"
                    : color === "Beige"
                    ? "bg-beige"
                    : color === "Gray"
                    ? "bg-gray-300"
                    : color === "Teal"
                    ? "bg-teal-400"
                    : color === "Red"
                    ? "bg-red-400"
                    : color === "Blue"
                    ? "bg-blue-500"
                    : color === "Pink"
                    ? "bg-pink-300"
                    : color === "Purple"
                    ? "bg-purple-400"
                    : color === "Yellow"
                    ? "bg-yellow-100"
                    : "";

                return (
                  <div
                    key={index}
                    className={`h-6 w-6 rounded-full ${colorClass} border border-gray-400`}
                  />
                );
              })}
            </div>
            <p className="text-sm pl-2 underline underline-offset-2 font-medium text-center justify-center md:text-left">
              Stock {inventory}
            </p>
          </div>

          <p className="text-lg sm:text-xl font-semibold text-center md:text-left">
            Rs. {price}
          </p>

          <button
            onClick={handleAddToCart}
            disabled={inventory === 0}
            aria-label={inventory === 0 ? "Out of Stock" : "Add to Cart"}
            className={`flex items-center gap-2 w-[150px] px-3 py-3 sm:px-4 sm:py-2 rounded-full transition duration-200 mx-auto sm:mx-0 ${
              inventory === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black text-white hover:bg-gray-700"
            }`}
          >
            <span>
              <BsCartDash aria-hidden="true" />
            </span>
            {inventory === 0 ? "Out of Stock" : "Add To Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailCard;
