import React, { useReducer } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParentContext, cartReducer, initState } from './store';
import Product from './component/Product';
import Cart from './component/Cart';
import Navbar from './component/Navbar';

function App() {
  const reducer = useReducer(cartReducer, initState);
  return (
    <ParentContext.Provider value={reducer}>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <Product />
          </div>
          <div className="col-md-5">
            <Cart />
          </div>
        </div>
      </div>
    </ParentContext.Provider>
  );
}

export default App;
