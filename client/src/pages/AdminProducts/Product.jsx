import React, { useState } from "react";
import { useEffect } from "react";
import http from "../../utils/request";

const Product = ({
  handleReload,
  item,
  handleCheckUpdate,
  handleDeleteProduct,
  
}) => {
  const [updateProduct, setUpdateProduct] = useState(item); // đọc lại useState nhé, do thằng này cache đó E biết do thằng này ạ :v hôm trước E hỏi thì A bảo chia ra nó k bị đó :v nhma hôm nay nó lại dính đòn :v
  // chia ra nma lúc có props data mới thì e phải set lại nữa
  // useEffect(() => {setUpdateProduct(item)}, [item]) ; kiểu như này à vâng ạ E hiểu hơn r a :v sắp 

  const handleUpdateProduct = async () => {
    const update = { ...updateProduct, update: false };
    try {
      const res = await http.post("products/update", update);
      // setProduct(res.data);
      handleReload()
    } catch (error) {
      alert("lỖI HỆ THÔNG VUI LÒNG LIÊN HỆ HỖ TRỢ");
    }
  };
console.log("item::", item);

  return (
    <div>
      <div className="Product">
        <h4 className="itemProduct">Tên sản phẩm {item.title}</h4>
        <img src={item.img} alt="ảnh sản phẩm" />
        <p className="itemProduct">{item.price} đ</p>
        <p className="itemProduct">Mô tả : {item.describe}</p>
        <p className="itemProduct">ID : {item._id}</p>
        <button
          className="UpdateProductBtn"
          onClick={() => {
            handleCheckUpdate(item);
            // setUpdateProduct(item)
          }}
        >
          {item.update ? "Giữ Nguyên" : "Update sản phẩm"}
        </button>
        <button
          className="DeleteProductBtn"
          onClick={() => handleDeleteProduct(item)}
        >
          Xóa sản phẩm
        </button>

        {item.update && (
          <div className="updateProduct">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpdateProduct();
              }}
            >
              <label htmlFor="#title">Tên sản phẩm</label>
              <input
                type="text"
                defaultValue={item.title}
                onChange={(e) =>
                  setUpdateProduct({ ...item, title: e.target.value })
                }
                id="title"
                placeholder="   Nhập tên sản phẩm"
              />
              <label htmlFor="#price">Giá sản phẩm</label>
              <input
                type="text"
                defaultValue={item.price}
                onChange={(e) =>
                  setUpdateProduct({
                    ...item,
                    price: Number(e.target.value),
                  })
                }
                id="price"
                placeholder="   Nhập Giá sản phẩm"
              />
              <label htmlFor="#img">Ảnh minh họa sản phẩm</label>
              <input
                type="text"
                defaultValue={item.img}
                onChange={(e) =>
                  setUpdateProduct({ ...item, img: e.target.value })
                }
                id="img"
                placeholder="   Nhập Ảnh minh họa sản phẩm"
              />
              <label htmlFor="#describe">Mô tả sản phẩm</label>
              <input
                type="text"
                defaultValue={item.describe}
                onChange={(e) =>
                  setUpdateProduct({
                    ...item,
                    describe: e.target.value,
                  })
                }
                id="describe"
                placeholder="   Nhập Mô tả sản phẩm"
              />
              <button>Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
