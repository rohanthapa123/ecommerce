import Layout from "@/components/Layout";
import { BounceSpinLoader } from "@/components/Loader";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";


const newProduct = () => {
  const Router = useRouter();
  const [categories, setCategories] = useState([])
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [images, setImages] = useState([])
  const [isUploading, setIsUploading] = useState(false)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = {title,description ,category, images, price}
    await axios.post('/api/products',data);
    Router.push('/products')

  }
  const uploadImage = async (e) => {
    setIsUploading(true)
    const {files} = e.target;
    if(files.length > 0 ){
        setIsUploading(true)
        const data = new FormData(); 
        for (let file of files){
          console.log(file)
          data.append('file',file)
        }
        const res = await axios.post('/api/upload',data);
        setImages((oldImages) => {
          return [...oldImages,...res.data.links]
          })
          console.log(images)
        setIsUploading(false)
    }

  }
  
  useEffect(()=>{
      axios.get('/api/categories').then((response)=>{
      setCategories(response.data)
    })
  }, [])
  return (
    <Layout>
      <form className="p-2 select-none">
        <label className="text-2xl text-blue-600 ">Product name</label>
        <input type="text" onChange={(e) =>{setTitle(e.target.value)}} placeholder="product name" className="my-2" />
        <select onChange={(e)=> {setCategory(e.target.value)}}>
          <option value={""}>Uncategorized</option>
          {
            categories.length > 0 && categories.map((category)=>{
              return <option key={category._id} value={category._id}>{category.name}</option>
            })
          }
        </select>
        <label>Photos</label>
        <div className="mb-2 flex flex-wrap">
          <ReactSortable
          list={images}
          className="flex flex-w gap-1"
          setList={(images) => setImages(images)}
          >
            {
              images.length > 0 && images.map((image)=>{
                return (
                  <div className="" key={image}>
                    <img className="h-20 mx-3" src={image} alt="imagges"/>
                  </div>
                )
              })
            }

          </ReactSortable>
          {
            isUploading && (
              <div className="h-20 m-3 text-center">
                  <BounceSpinLoader/>
              </div>
            )
          }
          <label className="w-20 h-20 cursor-pointer flex justify-center items-center bg-gray-300">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path 
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
              />
            </svg>
            <input type="file" multiple={true} onChange={(e)=>{uploadImage(e)}} className="hidden"/>
          </label>
        </div>
        <label>Description</label>
        <textarea placeholder="product description" onChange={(e)=>{setDescription(e.target.value)}}/>
        <label>Price</label>
        <input type="number" placeholder="produt price" className="" onChange={(e)=>{setPrice(e.target.value)}}/>
        <button className="border border-blue-700 bg-blue-700 py-1 px-3 rounded-xl text-white" onClick={(e) => {handleSubmit(e)}}>Save</button>
      </form>
    </Layout>
  );
};

export default newProduct;
