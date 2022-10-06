import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import "./style.css"

const HotList = () => {
  return (
    <div className="leftHotList">
        <ul>
              <li className="category">Danh mục</li>
              <li>TRÁI CÂY SẤY DẺO <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
              <li>TRÁI CÂY SẤY KHÔ <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
              <li>HẠT DINH DƯỠNG <span className='iconarrowright'> <MdKeyboardArrowRight /></span>  </li>
              <li>NHO KHÔ SẤY <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
        </ul>
    </div>
  )
}

export default HotList