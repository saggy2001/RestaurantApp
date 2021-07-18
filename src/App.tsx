import React from "react";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import ProductPage from "./pages/ProductPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/product/:productId" component={ProductDetail} />
      </Switch>
    </Router>

    // <div>
    //   <HomePage />
    //   <SearchPage />
    // </div>
  );
};

export default App;
