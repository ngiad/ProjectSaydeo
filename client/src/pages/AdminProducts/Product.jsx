import React, { useState } from "react";
import http from "../../utils/request";

const Product = ({
  setRefesh,
  refesh,
  item,
  handleCheckUpdate,
  handleDeleteProduct,
  setProduct,
}) => {
  const [updateProduct, setUpdateProduct] = useState({});

  const handleUpdateProduct = async () => {
    const update = { ...updateProduct, update: false };
    try {
      const res = await http.post("products/update", update);
      setProduct(res.data);
      setRefesh(!refesh)
    } catch (error) {
      alert("lỖI HỆ THÔNG VUI LÒNG LIÊN HỆ HỖ TRỢ");
    }
  };

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
            setUpdateProduct(item)
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
                value={updateProduct.title}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProduct, title: e.target.value })
                }
                id="title"
                placeholder="   Nhập tên sản phẩm"
              />
              <label htmlFor="#price">Giá sản phẩm</label>
              <input
                type="text"
                value={updateProduct.price}
                onChange={(e) =>
                  setUpdateProduct({
                    ...updateProduct,
                    price: Number(e.target.value),
                  })
                }
                id="price"
                placeholder="   Nhập Giá sản phẩm"
              />
              <label htmlFor="#img">Ảnh minh họa sản phẩm</label>
              <input
                type="text"
                value={updateProduct.img}
                onChange={(e) =>
                  setUpdateProduct({ ...updateProduct, img: e.target.value })
                }
                id="img"
                placeholder="   Nhập Ảnh minh họa sản phẩm"
              />
              <label htmlFor="#describe">Mô tả sản phẩm</label>
              <input
                type="text"
                value={updateProduct.describe}
                onChange={(e) =>
                  setUpdateProduct({
                    ...updateProduct,
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
