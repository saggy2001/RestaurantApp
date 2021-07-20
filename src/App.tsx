import React, { useState } from "react";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

type CartArray = { id: number; title: string; url: string; qty: number }[];

const App = () => {
  const [cartItems, setCartItems] = useState<CartArray>([]);
  const [cartCount, setCartCount] = useState(0);

  const onAdd = (product: any) => {
    const exist = cartItems.find((x: any) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === exist.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }

    setCartCount(cartItems.length);
  };

  const onRemove = (product: any) => {
    const exist: any = cartItems.find((x: any) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === exist.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
    setCartCount(cartItems.length);
  };
  const onDelete = (product: any) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
    setCartCount(cartItems.length);
  };
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route
          path="/search"
          component={() => <SearchPage onAdd={onAdd} cartCount={cartCount} />}
        />
        <Route
          path="/products"
          component={() => <ProductPage onAdd={onAdd} cartCount={cartCount} />}
        />
        <Route
          path="/product/:productId"
          component={() => (
            <ProductDetail cartCount={cartCount} onAdd={onAdd} />
          )}
        />
        <Route
          path="/cart"
          component={() => (
            <CartPage
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
            />
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
