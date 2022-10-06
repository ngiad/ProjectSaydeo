import "./Home.css"
import React from 'react'
import slider from "../../img/slidertop.jpg"
import camsaydeo from "../../img/camsaydeo.jpg"
import { MdKeyboardArrowRight } from 'react-icons/md';
import Hotproducts from "./Hotproducts";
import News from "./News";

const Home = () => {
  return (
    <div>
      <div className="wapSlider">
        <div className="top">
          <div className="left">
            <ul>
              <li className="category">Danh mục</li>
              <li>TRÁI CÂY SẤY DẺO <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
              <li>TRÁI CÂY SẤY KHÔ <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
              <li>HẠT DINH DƯỠNG <span className='iconarrowright'> <MdKeyboardArrowRight /></span>  </li>
              <li>NHO KHÔ SẤY <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
            </ul>
          </div>
          <div className="right">
            <img src={slider} alt="img" />
          </div>
        </div>
      </div>
      <div className="itemdv">
        <img src={camsaydeo} alt="camsaydeo" />
        <img src={camsaydeo} alt="camsaydeo" />
        <img src={camsaydeo} alt="camsaydeo" />
      </div>
      <Hotproducts />
      <News />
    </div>
  )
}

export default Home