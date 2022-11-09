import React, { useContext } from 'react';
import { ParentContext } from '../store';

const Navbar = () => {
  const [state] = useContext(ParentContext);
  return <nav class="navbar bg-light">
  <div class="container-fluid">
    <span class="navbar-brand" href="#">香香麵攤</span>
    <button type="button" class="btn nav-link">
      購物車
      <span class="badge rounded-pill bg-danger text-white">{state.cartList.length}</span>
    </button>
  </div>
</nav>
}
export default Navbar;