import Layout from '@/components/Layout'
import Loader from '@/components/Loader'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Categories = () => {
  const [name, setName] = useState('')
  const [parentCategory, setParentCategory] = useState('')
  const [editedCategory, setEditedCategory] = useState(null)
  const [categories, setCategories] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(()=> {
    getCategories()
  },[])

  const getCategories = async () => {
    
    setIsLoading(true)
    const resp = await axios.get('/api/categories');
    console.log(resp)
    setCategories(resp.data) 
    setIsLoading(false)
  }
  const saveCategory = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      name,
      parentCategory
    }
    console.log(data)
    let resp;
    if(editedCategory){
        data._id = editedCategory._id;
       resp = await axios.put('/api/categories',data)
       setEditedCategory(null)
       setName('')
       setParentCategory('')
    }else{
       resp = await axios.post('/api/categories',data)
    }
    if(resp.status == 200){
      getCategories()
    }else{
      //toast.error
    }
    setIsLoading(false)
    console.log(categories)
  
  }
  const editCategory = (category) => {
    setEditedCategory(category);
    setName(category.name)
    setParentCategory(category?.parent?._id)
    console.log(category)
  }
  const deleteCategory = async (category) => {
    setIsLoading(true);
    const {_id}= category;
    await axios.delete('/api/categories?_id=' + _id)
    getCategories();
    setIsLoading(false);
  }
  return (
    <Layout>
      <h1>Categories</h1>
        <form onSubmit={saveCategory}>
          <div className='flex gap-1'>
            <input placeholder='category name' value={name} onChange={(e) => setName(e.target.value)}/>
            <select value={parentCategory} onChange={(e) => setParentCategory(e.target.value)}>
              <option value={""}>No Parent CAtegory</option>
              {categories.length > 0 && categories.map((category)=> {
                return <option key={category._id} value={category._id}>{category.name}</option>
              })}
            </select>
             <button type='submit' className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold border border-solid border-blue-500 px-3 rounded-xl '>Submit</button>
          </div>

        </form>
        {
          isLoading ? <Loader />: !editedCategory && 
        <table className='  '>
          <thead className=' '>
          <tr>
            <td>Category name</td>
            <td>Parent category</td>
          </tr>
          </thead>
          <tbody className=' '>
              {
                categories.length > 0 && 
                categories.map((category,index)=>{
                  return <tr key={category._id} className={`py-4 ${index % 2 == 0 ? "bg-gray-100" : "bg-gray-50"}`}>
                    <td >{category.name}</td>
                    <td>{category?.parent?.name}</td>
                    <td className='text-center '>
                      <button className='bg-blue-500 p-2 rounded-xl mr-2' onClick={(e)=> {editCategory( category )}}>Edit</button>
                      <button className='bg-red-500 p-2 rounded-xl' onClick={(e)=> {deleteCategory( category )}}>Delete</button>
                    </td>
                  </tr>
                })
              }
          </tbody>
        </table>
        }
    </Layout>
    
  )
}

export default Categories