import React, { useState } from "react";
import Cart from "./Cart";
import { dataShoe } from "./data_shoe";
import ListShoe from "./ListShoe";

export default function ShoeShop() {
  let [list] = useState(dataShoe);
  let [cart, setCart] = useState([]);
  let handleAddToCart = (shoe) => {
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => {
      return item.id == shoe.id;
    });
    if (index == -1) {
      let newShoe = { ...shoe, soLuong: 1 };
      cloneCart.push(newShoe);
    } else {
      cloneCart[index].soLuong++;
    }
    setCart((cart = cloneCart));
  };

  let handleQuantity = (id, number) => {
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => {
      return item.id == id;
    });
    cloneCart[index].soLuong += number;
    if (cloneCart[index].soLuong == 0) {
      cloneCart.splice(index, 1);
    }
    setCart((cart = cloneCart));
  };

  let handleDelete = (id) => {
    let cloneCart = [...cart];
    let index = cloneCart.findIndex((item) => {
      return item.id == id;
    });
    cloneCart.splice(index, 1);
    setCart((cart = cloneCart));
  };

  return (
    <div>
      <Cart
        handleDelete={handleDelete}
        handleQuantity={handleQuantity}
        cart = {cart}
      ></Cart>
      <ListShoe handleAddToCart={handleAddToCart} list={list}></ListShoe>
    </div>
  );
}
