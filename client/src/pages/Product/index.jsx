import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Product = () => {
    const {id} = useParams()
    const [DataProduct,getDataProduct] = useState([])
    const getDataProductFunction = async() =>{
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${id}`)
            const dataProducts = await res.json()
            getDataProduct(dataProducts)
        } catch (error) {
            console.log("đây là error",error)
            alert("Hệ thống đang bảo trì")
        }
    }
    useEffect(() =>{
        getDataProductFunction()
    })
  return (
    <div>
        <img src={DataProduct.image} alt="itemimage" />
        <p>{DataProduct.title}</p>
        <p>{DataProduct.price} $</p>
    </div>
  )
}

export default Product