import React from 'react'
import "./Home.css"
import gungsaydeo from "../../img/gungsaydeo.jpg"

const Hotproducts = () => {
  return (
    <div className='HotproductsHome'>
        <div className="navHotproductsHome">
            <button>SẢN PHẨM HOT</button>
            <ul>
                <li>LONG NHÃN SẤY DẺO</li>
                <li>VỎ BƯỞI SẤY DẺO</li>
                <li>NAM VIỆT QUẤT MỸ</li>
                <li>GỪNG SẤY DẺO</li>
                <li>+ Xem tất cả</li>
            </ul>
        </div>
        <div class="grid-container">
            <div class="grid-item">
                <img src={gungsaydeo} alt="gungsaydeo" />
                <p className='titleProduct'>Gừng sấy dẻo 100G</p>
                <p className='cordProduc'>200.000đ</p>    
            </div>
            <div class="grid-item">
                <img src={gungsaydeo} alt="gungsaydeo" />
                <p className='titleProduct'>Gừng sấy dẻo 100G</p>
                <p className='cordProduc'>200.000đ</p>    
            </div>
            <div class="grid-item">
                <img src={gungsaydeo} alt="gungsaydeo" />
                <p className='titleProduct'>Gừng sấy dẻo 100G</p>
                <p className='cordProduc'>200.000đ</p>    
            </div>  
            <div class="grid-item">
                <img src={gungsaydeo} alt="gungsaydeo" />
                <p className='titleProduct'>Gừng sấy dẻo 100G</p>
                <p className='cordProduc'>200.000đ</p>    
            </div>
            <div class="grid-item">
                <img src={gungsaydeo} alt="gungsaydeo" />
                <p className='titleProduct'>Gừng sấy dẻo 100G</p>
                <p className='cordProduc'>200.000đ</p>    
            </div>
            <div class="grid-item">
                <img src={gungsaydeo} alt="gungsaydeo" />
                <p className='titleProduct'>Gừng sấy dẻo 100G</p>
                <p className='cordProduc'>200.000đ</p>    
            </div>   
        </div>
    </div>
  )
}

export default Hotproducts