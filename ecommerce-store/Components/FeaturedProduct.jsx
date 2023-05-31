import Link from 'next/link'
import React  , {useContext} from 'react'
import CartContext from '@/context/CartContext'
import { useRouter } from 'next/router';

const FeaturedProduct = ({product}) => {
  const { addProduct , addProductItem } = useContext(CartContext);
  const router = useRouter()
  const addToCart = (e, id) => {
    e.preventDefault();
    addProduct(id);
  }
  const addItem = (e, id) =>{
    e.preventDefault();
    addProductItem(id);
    router.push(`/productitem/${id}`)
}
  return (
    <>
      <div className='bg-gray-800  text-white p-10'>
        <div className='grid gap-2 md:grid-cols-2'>
          <div className='order-2 md:order-1 text-center pt-20'>
            <h1 className='text-2xl md:text-3xl'>
              {product.title}
            </h1>
            <p className='text-gray-300 text-sm mb-4'>{product.description}</p>
            <div className='flex gap-4 mt-6 justify-center'>
              <Link href={"/product/1"}>
                <button className='cursor-pointer text-blue-600 bg-purple-300 p-2 rounded-xl' onClick={(e)=>{addItem(e,product._id)}}>Read more</button>
              </Link>
              <Link href={""}>
                <button className='cursor-pointer text-white bg-purple-700 p-2 rounded-xl' onClick={(e) => {addToCart(e,product._id)}}>Add to Cart</button>
              </Link>
            </div>
          </div>
          <div className='order-1 md:order-2 m-auto '>
            <img className='w-64 h-64 rounded-xl ' src={product.images} alt="featured product image" />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturedProduct