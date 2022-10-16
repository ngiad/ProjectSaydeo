import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateType } from '../../Redux/getProductType';
import "./style.css"

const HotList = () => {
  const Navigate = useNavigate()
  const Dispatch = useDispatch()

  const getDataType = (type) =>{
    Dispatch(updateType(type))
    Navigate("/products")
  }
  return (
    <div className="leftHotList">
        <ul>
              <li onClick={() => getDataType("")} className="category">Danh mục</li>
              <li onClick={() => getDataType("trái cây sấy dẻo")}>TRÁI CÂY SẤY DẺO <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
              <li onClick={() => getDataType("trái cây sấy khô")}>TRÁI CÂY SẤY KHÔ <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
              <li onClick={() => getDataType("hạt dinh dưỡng")}>HẠT DINH DƯỠNG <span className='iconarrowright'> <MdKeyboardArrowRight /></span>  </li>
              <li onClick={() => getDataType("nho khô sấy")}>NHO KHÔ SẤY <span className='iconarrowright'> <MdKeyboardArrowRight /></span> </li>
        </ul>
    </div>
  )
}

export default HotList