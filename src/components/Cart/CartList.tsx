import React from "react";
import CartCard from "./CartCard";

const CartList = ({
  cartItems,
  onAdd,
  onRemove,
  onDelete,
}: {
  cartItems: { id: number; title: string; url: string; qty: number }[];
  onAdd: Function;
  onRemove: Function;
  onDelete: Function;
}) => {
  return (
    <div>
      {cartItems.map((item) => {
        return (
          <CartCard
            key={item.id}
            id={item.id}
            title={item.title}
            url={item.url}
            qty={item.qty}
            onAdd={onAdd}
            onRemove={onRemove}
            onDelete={onDelete}
          />
        );
      })}
    </div>
  );
};

export default CartList;
