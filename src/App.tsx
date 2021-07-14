import React from "react";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/search" component={SearchPage} />
      </Switch>
    </Router>

    // <div>
    //   <HomePage />
    //   <SearchPage />
    // </div>
  );
};

export default App;
