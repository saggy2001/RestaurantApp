import React from "react";
// import CartCard from "../components/Cart/CartCard";
import CartList from "../components/Cart/CartList";

const CartPage = () => {
  return (
    <div>
      <h1 style={{ padding: "20px 0px 10px 15px" }}>Your Cart</h1>
      <CartList />
    </div>
  );
};

export default CartPage;
