import React from 'react'
import { useSelector } from 'react-redux'
import NavNavigate from '../../Components/NavNavigate'
import "./Cart.css"
import ProductCart from './ProductCart'

const Cart = () => {
  const CartProduct = useSelector((state) => state.Cart)
  return (
    <div className='cart'>
      <div className='NavNavigate'><NavNavigate title={"Giỏ hàng"} link={"/cart"}/></div>
      <div className='ContenerCart'>
        <h1>Giỏ hàng</h1>
        <div className="contentCart">
          <table id="customers">
              <tr>
                  <th>STT</th>
                  <th>Sản phẩm</th>
                  <th>Tên sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá tiền</th>
              </tr>
                {
                  CartProduct.map((product,index) =>{
                    return <ProductCart key={index} product={product} STT={index + 1} />
                  })
                }
          </table>
        </div>
        <div className='pay'>
            <h2>Tổng giá : <span> {CartProduct.reduce((total,product)=>total + product.priceByQuantity ,0)} đ</span></h2>
            <button>Đặt hàng</button>
        </div>
      </div>
    </div>
  )
}

export default Cart