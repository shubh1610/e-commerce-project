import Header from "./Components/Header";
import HomePage from "./Components/Home";
import Cart from "./Components/Cart";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Header>
      </Header>
      <Route path="/" exact component={HomePage}></Route>
      <Route path="/Cart" exact component={Cart}></Route>
      
      
      </Router>
     
    </div>
  );
}

export default App;
