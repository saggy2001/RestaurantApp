import React from "react";
// import CartCard from "../components/Cart/CartCard";
import CartList from "../components/Cart/CartList";

const CartPage = ({
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
      <h1 style={{ padding: "20px 0px 10px 15px" }}>Your Cart</h1>
      <CartList
        cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
        onDelete={onDelete}
      />
    </div>
  );
};

export default CartPage;
