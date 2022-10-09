import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductSearch = ({item}) => {
  const Navigate = useNavigate()
  const handleClickProduct = () => {
    Navigate(`/products/${item._id}`)
  }
  return (
    <div onClick={handleClickProduct} className='ProductSearch'>
      <img src={item.img} alt="img" />
      <div className='titleSearch'>
        <h3>{item.title}</h3>
        <p>{item.price} đ</p>
        <span>{item.describe} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus quod minima aliquid veritatis nulla voluptatem amet cumque vero atque expedita. Inventore totam nihil nisi. Ea rerum vero quos aliquam ex.
        At laboriosam veniam, magnam neque iste voluptates exercitationem tempora? Quia iste commodi est voluptate id sint minus corporis iusto fuga! Maxime illo iure odio ab totam hic quisquam, velit dolorem.
        Itaque nobis sint unde, vitae iste enim nostrum! Totam incidunt recusandae natus corporis nisi aspernatur. Odit doloremque nulla provident voluptatibus fugit nisi. Culpa iusto sunt tenetur blanditiis incidunt. Similique, provident.
        Illum facere et quaerat libero adipisci non natus esse cum provident molestias. Rerum deleniti quas dicta magni distinctio, illo eius quis saepe enim placeat blanditiis totam? Sit praesentium soluta accusamus!
        Officia fugiat soluta, commodi similique eligendi dolorum quibusdam corrupti reiciendis sequi tempora harum ipsa illum blanditiis dolor ex ipsam distinctio itaque ipsum deserunt voluptates culpa enim repellendus odio? Consequatur, dolores?
        Culpa numquam porro vitae consequatur, quidem quisquam ex quae autem veritatis adipisci, sequi aspernatur, soluta deleniti veniam recusandae magnam tenetur quos modi odit? Voluptas possimus illum laborum beatae vel quo.</span>
      </div>
    </div>
  )
}

export default ProductSearch