import FeaturedProduct from "@/Components/FeaturedProduct";
import Navbar from "@/Components/Navbar";
import NewProduct from "@/Components/NewProduct";

import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

export default function HomePage({products, product}) {
  
 
  
  return (
    <>
      <Navbar/>
      {product && <FeaturedProduct product={product} />}
      {products?.length > 0 && <NewProduct products={products} />}
    </>
  );
}
export async function getServerSideProps() {
  const featuredProductId = '64731802de2c9386190cbc62';
  await mongooseConnect();
  const featuredProduct = await Product.findById(featuredProductId);

  const newProducts = await Product.find({}, null, { sort: { '_id': -1 }, limit: 10 });

  return {
    props: {
      product: JSON.parse(JSON.stringify(featuredProduct)),
      products: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}