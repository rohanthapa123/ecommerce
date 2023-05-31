import React  from 'react'
import ProductCard from './ProductCard'

const NewProduct = ({products}) => {
    
    return (
        <>
            <div className="text-center font-bold text-2xl py-3">New Products</div>
            <div className="flex mt-6 flex-wrap gap-3 px-14 m-auto">

            {
                products?.map((product)=>{
                    return <ProductCard key={product._id} product={product}  />
                })
                
            }
            </div>
        </>
    )
}

export default NewProduct