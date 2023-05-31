const { default: axios } = require("axios")

const BACKEND_URL = 'http://localhost:3000/products'
export const getProductById =async  (id) =>{
    const response = await axios.get(BACKEND_URL + `?id=${id}`)
    return response

}
export const getProducts =async  () =>{
    try {
        const response = await axios.get(BACKEND_URL )
        return response
    } catch (error) {
        console.log(error)
    }

}