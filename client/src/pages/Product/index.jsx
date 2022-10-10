import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import NavNavigate from "../../Components/NavNavigate";
import { AddProduct } from "../../Redux/CartSlice";
import http from "../../utils/request";
import News from "../Home/News";
import "./Product.css";

const Product = () => {
  const { id } = useParams();

  const DisPatch = useDispatch();
  const [DataProduct, getDataProduct] = useState({});
  const getDataProductFunction = async () => {
    try {
      const res = await http.get("products/search/" + id);
      getDataProduct(res.data);
    } catch (error) {
      console.log("đây là error", error);
      alert("Hệ thống đang bảo trì");
    }
  };
  const AddProductToCart = () => {
    DisPatch(AddProduct({ ...DataProduct, amount: 1,priceByQuantity : DataProduct.price }));
  };
  useEffect(() => {
    getDataProductFunction();
  }, []);
  return (
    <div>
      <div className="NavNavigate">
        <NavNavigate title={"Sản phẩm"} link={"/products"} />
      </div>
      <div className="contenerProduct">
        <img src={DataProduct.img} alt="itemimage" />
        <div>
          <h3>{DataProduct.title}</h3>
          <p>{DataProduct.price} $</p>
          <span>
            {DataProduct.describe} Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Praesentium, earum similique! Corrupti deleniti
            dolor alias eos corporis iusto laudantium! Doloribus corporis ea
            modi amet beatae facilis commodi laborum ipsa deleniti. Deserunt
            enim quibusdam aspernatur, saepe magnam perferendis ea quisquam
            blanditiis rerum vitae nam temporibus dicta ducimus aliquid
            laudantium minima explicabo natus omnis. Vero quam laborum,
            molestiae quaerat suscipit consequuntur quos. Id molestias debitis
            veritatis quia cum consequatur ratione quam! Ipsa quibusdam quisquam
            alias eum, consectetur beatae. Officiis, iusto aliquam officia,
            ullam, iure labore accusantium tempore recusandae quia suscipit
            praesentium ipsam. A at alias adipisci id, hic voluptates eligendi.
            Esse quasi, totam et soluta, perferendis voluptate necessitatibus ex
            dolores atque ipsum, aliquid doloribus quis fugit corrupti magni quo
            numquam. Ullam, harum. Odit, laboriosam ducimus quasi deleniti
            asperiores pariatur cum aperiam ex illo assumenda fugit. Ipsum quasi
            magnam modi eum. Aut sunt quasi corrupti voluptatum laboriosam ullam
            ut eius. Sequi, at assumenda! Magnam doloremque modi molestiae
            eveniet voluptatibus autem, sit ea eos soluta reprehenderit id dicta
            doloribus aliquid velit eaque dolores voluptates ipsa minima omnis
            possimus? Eveniet odit id fuga modi nemo?
          </span>
          <button onClick={AddProductToCart}>Thêm vào giỏ</button>
        </div>
      </div>
      <News />
    </div>
  );
};

export default Product;
