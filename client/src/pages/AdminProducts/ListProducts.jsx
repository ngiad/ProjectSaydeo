import React, { useContext, useState } from 'react'
import "./AdminProducts.css"
import http from '../../utils/request'
import { AuthContext } from '../../contexts/AuthContext'

const ListProducts = ({Products,setProduct}) => {
  const { user } = useContext(AuthContext)

  const [updateProduct,setUpdateProduct] = useState({
    _id:"",
    title:"",
    price:"",
    img:"",
    describe: ""
  })
  
  const handleCheckUpdate = async(item) =>{
    const CheckUpdateProduct = {...item,update:!item.update}
    try {
      const res =  await http.post("products/update",CheckUpdateProduct)
      setProduct(res.data)
    } catch (error) {
      alert("lỖI HỆ THÔNG VUI LÒNG LIÊN HỆ HỖ TRỢ")
    }
  }
  const handleDeleteProduct = async(item) => {
    try {
      const res = await http.delete("products/delete",{
          headers: {
            token: user.token
          },
          data: item   
      })
      setProduct(res.data)
    } catch (error) {
      alert("lỖI HỆ THÔNG VUI LÒNG LIÊN HỆ HỖ TRỢ")
    }
  } 

  const handleUpdateProduct = async() =>{
    const update = {...updateProduct,update:false}
    try {
      const res =  await http.post("products/update",update)
      setProduct(res.data)
      setUpdateProduct({
        _id:"",
        title:"",
        price:"",
        img:"",
        describe: ""
  })
    } catch (error) {
      alert("lỖI HỆ THÔNG VUI LÒNG LIÊN HỆ HỖ TRỢ")
    }
  }
  return (
    <div className='MainListProductsAdmin'>
    <h1>Danh sách sản phẩm</h1>
    <div className='Products'>
        {
          Products.map((item,index) => {
            return <div key={index} className='Product'>
                      <h4 className='itemProduct'>Tên sản phẩm {item.title}</h4>
                      <img src={item.img} alt="ảnh sản phẩm" />
                      <p  className='itemProduct'>{item.price} đ</p>
                      <p  className='itemProduct'>Mô tả : {item.describe}</p>
                      <p  className='itemProduct'>ID :  {item._id}</p>
                      <button className='UpdateProductBtn' onClick={() => {handleCheckUpdate(item)}}>{item.update ?  "Giữ Nguyên" : "Update sản phẩm"}</button>
                      <button className='DeleteProductBtn' onClick={() => handleDeleteProduct(item)}>Xóa sản phẩm</button>

                      {
                        item.update && <div className='updateProduct'>
                          <form onSubmit={(e) =>{
                            e.preventDefault()
                            handleUpdateProduct()
                          }}>
                            <label htmlFor="#title">Id sản phẩm</label>
                            <input type="text" value={updateProduct._id} onChange={(e) =>setUpdateProduct({...updateProduct,_id:e.target.value}) }   id='title' placeholder='   Nhập id sản phẩm'/>
                            <label htmlFor="#title">Tên sản phẩm</label>
                            <input type="text" value={updateProduct.title} onChange={(e) =>setUpdateProduct({...updateProduct,title:e.target.value}) }   id='title' placeholder='   Nhập tên sản phẩm'/>
                            <label htmlFor="#price">Giá sản phẩm</label>
                            <input type="text" value={updateProduct.price}  onChange={(e) =>setUpdateProduct({...updateProduct,price:Number(e.target.value)}) }   id='price' placeholder='   Nhập Giá sản phẩm'/>
                            <label htmlFor="#img">Ảnh minh họa sản phẩm</label>
                            <input type="text" value={updateProduct.img}   onChange={(e) =>setUpdateProduct({...updateProduct,img:e.target.value}) }  id='img' placeholder='   Nhập Ảnh minh họa sản phẩm'/>
                            <label htmlFor="#describe">Mô tả sản phẩm</label>
                            <input type="text" value={updateProduct.describe}  onChange={(e) =>setUpdateProduct({...updateProduct,describe:e.target.value}) } id='describe' placeholder='   Nhập Mô tả sản phẩm'/>
                            <button>Submit</button>
                        </form>
                      </div>
                      }
                </div>
            })
        }
        </div>
    </div>
  )
}

export default ListProducts