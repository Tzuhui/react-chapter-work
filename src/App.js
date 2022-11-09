import React, {useReducer} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ParentContext, cartReducer, initState } from './store';
import Product from './component/Product';
import Cart from './component/Cart';

function App() {
  const reducer = useReducer(cartReducer, initState);
  return (
    <div className="container">
      <ParentContext.Provider value={reducer}>
        <Cart />
        <Product />
      </ParentContext.Provider>
    </div>
  );
}

export default App;
