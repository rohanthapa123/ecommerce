import Layout from '@/components/Layout'
import Loader from '@/components/Loader';
import { getProducts } from '@/services/axios.service';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

const products = () => {
    const [loading , setLoading] = useState(false)
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        getProduct();
    },[])
    const getProduct = () => {
        setLoading(true)
        getProducts().then((resp)=>{
            setProducts(resp.data)
            console.log(resp.data)
        }) 
        setLoading(false)
    }
    const deleteProduct = async (e, product) =>{
        e.preventDefault();
        setLoading(true)
        try {
            await axios.delete('/api/products?id='+ product._id)
            const data = products.filter((prod)=>{
            return prod._id !== product._id;
            })
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
  return (
    <Layout>
        <div className='my-2'>

        <Link href={"/products/new"} className=' ease-in-out border border-blue-400 h-fit p-2 bg-blue-400 rounded-lg text-white hover:bg-blue-700'>Add New Product </Link>
        </div>
        <table>
            <thead>
                <tr>
                    <td>Product name</td>
                    <td>Product price</td>
                    <td>Product Images</td>
                </tr>
            </thead>
            <tbody>
                {   
                    loading ? <Loader/> :
                    products && products.map((product)=> {
                        return <tr key={product._id}>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td className="flex">
                                {
                                    product.images.map((i)=>{
                                        return <img key={i} className='h-12' src={i} alt='cat' />
                                    })
                                }
                            </td>
                            <td>
                                <button className='bg-red-500 p-2 rounded-xl' onClick={(e)=>{deleteProduct(e, product)}}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </Layout>
  )
}

export default products