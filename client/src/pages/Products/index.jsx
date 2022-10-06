import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import HotList from '../../Components/HotList'
import Loading from '../../Components/Loading'
import NavNavigate from '../../Components/NavNavigate'
import "./Products.css"

const Products = () => {
    const Navigate = useNavigate()

    const [DataProducts,getDataProducts] = useState([])


    const [isLoading,setIsLoading] = useState(true)
    const getDataProductsFunction = async() =>{
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const dataProducts = await res.json()
            getDataProducts(dataProducts)
            setIsLoading(false)
        } catch (error) {
            console.log("đây là error",error)
            alert("Hộ thống đang bảo trì")
        }
    }
    useEffect(() =>{
        getDataProductsFunction()
    },[])
    console.log(DataProducts)
  return (
    <div className='Products'>
            <NavNavigate title="Sản phẩm" link="/products"/>
            <div className="contener">
                <div className='grid-container'>
                    { isLoading ? <Loading /> :
                        DataProducts.map((item,index) =>{
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
    </div>
  )
}

export default Products