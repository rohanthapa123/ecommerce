import Navbar from '@/components/Navbar';
import CartContext from '@/context/CartContext'
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'

const cart = () => {
   const { cartProduct, addProduct, removeFromCart, findProductInCartId } = useContext(CartContext);
   const [products, setProducts] = useState([]);
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [city, setCity] = useState('');
   const [postalCode, setPostalCode] = useState('');
   const [streetAddress, setStreetAddress] = useState('');
   const [country, setCountry] = useState('');
  //  console.log(findProductInCartId)

   const addToCart = (e, id) => {
      e.preventDefault();
      addProduct(id);
   };

   const removeProdCart = (e, id) => {
      e.preventDefault();
      removeFromCart(id);
   };

   useEffect(() => {
      if (cartProduct.length > 0) {
         axios.post('/api/cart', { ids: cartProduct }).then((resp) => {

            setProducts(resp.data);
         })
      } else {
         setProducts([]);
      }
   }, [cartProduct])
   return (
      <>
         <Navbar />
         <div className="h-screen bg-gray-100">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto  justify-center px-6 md:flex md:space-x-6 xl:px-0">


               <div className='flex flex-col w-full'>
                  {products.length > 0 && products.map((product) => {
                     return <div key={product._id} className="rounded-lg md:w-2/3">
                        <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                           <img src={product.images[0]} alt="product-image" className="w-full rounded-lg sm:w-40" />
                           <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                              <div className="mt-5 sm:mt-0">
                                 <h2 className="text-lg font-bold text-gray-900">{product.title}</h2>
                                 <p className="mt-1 text-xs text-gray-700">${product.price}</p>
                              </div>
                              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                 <div className="flex items-center border-gray-100">
                                    <span onClick={(e) => addToCart(e, product._id)} className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> +</span>
                                    <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value={findProductInCartId(product._id)} min="1" />
                                    <span onClick={(e) => removeProdCart(e, product._id)} className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                 </div>
                                 <div className="flex items-center space-x-4">
                                    <p className="text-sm">${product.price}</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                 </div>
                              </div>
                           </div>
                        </div>

                     </div>
                  })}
               </div>



               <div className="mt-6 w-full h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
                  <div className='bg-white rounded-lg p-6'>
                     <h2>Order Information</h2>
                     <form>
                        <input className='w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline'
                           placeholder='Name' type='text' onChange={(e) => setName(e.target.value)} />
                        <input className='w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline'
                           placeholder='Email' type='text' onChange={(e) => setEmail(e.target.value)} />
                        <div className='flex gap-4 mb-4'>
                           <input className='w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline'
                              placeholder='Country' type='text' onChange={(e) => setCountry(e.target.value)} />
                           <input className='w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline'
                              placeholder='Street Address' type='text' onChange={(e) => setStreetAddress(e.target.value)} />
                        </div>
                        <div className='flex gap-4 mb-4'>
                           <input className='w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline'
                              placeholder='City' type='text' onChange={(e) => setCity(e.target.value)} />
                           <input className='w-full p-4 mb-4 border-gray-300 rounded-lg focus:outline'
                              placeholder='Postal Code' type='number' onChange={(e) => setPostalCode(e.target.value)} />
                        </div>
                     </form>
                  </div>

                  <div className="mb-2 flex justify-between">
                     <p className="text-gray-700">Subtotal</p>
                     <p className="text-gray-700">$129.99</p>
                  </div>
                  <div className="flex justify-between">
                     <p className="text-gray-700">Shipping</p>
                     <p className="text-gray-700">$4.99</p>
                  </div>
                  <hr className="my-4" />
                  <div className="flex justify-between">
                     <p className="text-lg font-bold">Total</p>
                     <div className="">
                        <p className="mb-1 text-lg font-bold">$134.98 USD</p>
                        <p className="text-sm text-gray-700">including VAT</p>
                     </div>
                  </div>
                  <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                     Check out</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default cart