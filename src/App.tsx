import React, { useReducer } from "react";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import { createContext } from "react";
import { reducer } from "./components/reducer";

export type ProductItem = { id: number; title: string; url: string };
export type CartItem = { id: number; title: string; url: string; qty: number };
type State = {
  items: CartItem[];
  totalAmount: number;
  totalItem: 0;
};
const initialState: State = {
  items: [],
  totalAmount: 0,
  totalItem: 0,
};

interface CartContextManager {
  removeItem: (id: number) => void;
  addItem: (product: ProductItem) => void;
  subtractItem: (product: ProductItem) => void;
  items: CartItem[];
  totalAmount: number;
  totalItem: number;
}

export const CartContext = createContext<CartContextManager>({
  ...initialState,
  removeItem: (id: number) => console.log(id),
  addItem: (product: ProductItem) => console.log(product),
  subtractItem: (product: ProductItem) => console.log(product),
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const removeItem: (id: number) => void = (id: number) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  const addItem: (product: ProductItem) => void = (product: ProductItem) => {
    return dispatch({
      type: "ADD_ITEM",
      payload: product,
    });
  };

  const subtractItem: (product: ProductItem) => void = (
    product: ProductItem
  ) => {
    return dispatch({
      type: "SUBTRACT_ITEM",
      payload: product,
    });
  };

  return (
    <CartContext.Provider
      value={{ ...state, removeItem, addItem, subtractItem }}
    >
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/search" component={() => <SearchPage />} />
          <Route path="/products" component={() => <ProductPage />} />
          <Route
            path="/product/:productId"
            component={() => <ProductDetail />}
          />
          <Route path="/cart" component={() => <CartPage />} />
        </Switch>
      </Router>
    </CartContext.Provider>
  );
};

export default App;
