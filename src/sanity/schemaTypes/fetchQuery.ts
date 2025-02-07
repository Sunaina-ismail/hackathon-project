export const allProductsDetailQuery = `*[_type == "product" && slug.current == $slug][0]{
  _id,
  productName,
  price,
  tags,
  category,
  status,
  inventory,
  colors,
  description,
  "imageUrl": image.asset->url,
  "slug": slug.current
}`;

  export const Gearup = `*[_type == "product" && "Gear Up" in tags ] {
    _id,
    productName,
    price,
    "imageUrl": image.asset->url,
    category,
    color,
    tags,
    slug
  }`;
  
  export const Best = `*[_type == "product" && "Best of Air Max" in tags ] {
    _id,
    productName,
    price,
    color,
    "imageUrl": image.asset->url,
    category,
    tags,
    slug
  }`;

  export const NewArrivals = `*[_type == "product" && "New Arrivals" in tags ] {
    _id,
    productName,
    price,
    color,
    "imageUrl": image.asset->url,
    category,
    tags,
    slug
  }`;
  

  export const essentialsQuery = `*[_type == "product" && "Essentials" in tags]{
    _id,
    productName,
    price,
    category,
    slug,
    "imageUrl": image.asset->url
  }`;
  


 