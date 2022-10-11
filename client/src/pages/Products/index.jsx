import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import HotList from '../../Components/HotList'
import NavNavigate from '../../Components/NavNavigate'
import "./Products.css"

const Products = () => {
    const Navigate = useNavigate()

    const [DataProducts,getDataProducts] = useState([])


    const getDataProductsFunction = async() =>{
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const dataProducts = await res.json()
            getDataProducts(dataProducts)
        } catch (error) {
            toast.warning("Hộ thống đang bảo trì")
        }
    }
    useEffect(() =>{
        getDataProductsFunction()
    },[])
  return (
    <div className='Products'>
            <NavNavigate title="Sản phẩm" link="/products"/>
            <div className="contener">
                <div className='grid-container'>
                    { DataProducts.map((item,index) =>{
                            return <div onClick={()=>{
                                Navigate(`/products/${item.id}`)
                            }} key={index} class="grid-item">
                                    <img src={item.image} alt="itemimage" />
                                    <p>{item.title}</p>
                                    <p>{item.price} $</p>
                            </div>
                        })
                    }
                </div>
                <div className="right">
                    <HotList />
                </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Products