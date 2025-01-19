import { fetchProductBySlug } from "@/sanity/schemaTypes/data-fetch-utils";
import ProductDetailCard from "@/components/Home/ProductDetailCard";
import { notFound } from "next/navigation";

interface ProductDetailsProps {
  params: Promise<{ slug: string }>;
}

const Product = async ({ params }: ProductDetailsProps) => {
  const { slug } = await params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    notFound();
  }
  return (
    <div>
      <ProductDetailCard
        productName={product.productName}
        description={product.description}
        price={product.price}
        imageUrl={product.imageUrl}
        colors={product.colors}
        inventory={product.inventory}
        productId={product._id}  
      />
    </div>
  );
};

export default Product;

