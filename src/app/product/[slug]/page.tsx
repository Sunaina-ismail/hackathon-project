
'use client'

import { useState, useEffect } from "react";
import { fetchProductBySlug } from "@/sanity/schemaTypes/data-fetch-utils";
import ProductDetailCard from "@/components/Home/ProductDetailCard";
import { notFound } from "next/navigation";

interface ProductDetailsProps {
  params: Promise<{ slug: string }>;
}

const Product = ({ params }: ProductDetailsProps) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    // Extract the slug from params when the component mounts
    const getSlug = async () => {
      const { slug } = await params;
      setSlug(slug);
    };

    getSlug();
  }, [params]);

  useEffect(() => {
    if (!slug) return;

    const fetchData = async () => {
      try {
        const fetchedProduct = await fetchProductBySlug(slug);
        if (!fetchedProduct) {
          notFound();
        } else {
          setProduct(fetchedProduct);
        }
      } catch (error) {
        setError("Error fetching product");
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  if (error || !product) {
    return <div>No product found</div>;
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
