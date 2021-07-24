import React, { useContext } from "react";
import CartCard from "./CartCard";
import { CartContext } from "../../App";

const CartList = () => {
  const { items } = useContext(CartContext);
  return (
    <div>
      {items.map((item, index) => {
        return (
          <CartCard
            key={index}
            id={item.id}
            title={item.title}
            url={item.url}
            qty={item.qty}
          />
        );
      })}
    </div>
  );
};

export default CartList;
