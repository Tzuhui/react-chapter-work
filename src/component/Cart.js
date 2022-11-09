import React, { useContext } from 'react';
import { ParentContext } from '../store';

const Cart = () => {
  const [state, dispatch] = useContext(ParentContext);
  const changeCartQty = (e) => {
    const qty = e.target.value;
    const target = e.target.dataset.id;
    dispatch({ type: 'CHANGE_CART_QTY', payload: {id: target, qty: qty} });
  }
  return (
    <div className="bg-light p-4 my-4">
      {state.cartList.length === 0 ? (
        <div>購物車沒有任何品項</div>
      ) : (
        <table className="table align-middle">
          <tbody>
            {state.cartList.map((item, index) => (
              <tr key={`${item.id}_${index}`}>
                <td style={{ width: '100px' }}>
                  <img src={item.img} className="table-image" alt="" />
                </td>
                <td width="200">{item.title}<br /><small className='text-muted'>NT$ {item.price}</small></td>
                <td width="150">
                  <select value={item.qty} className="form-select" data-id={item.id} onChange={changeCartQty}>
                    {
                      [...new Array(20)].map((_, i) => <option key={`option_${i}`} value={i + 1}>{i+ 1}</option>)
                    }
                  </select>
                </td>
                <td width="150" className="text-end">
                  NT$ {item.price * item.qty}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5" className="text-end">
                總金額 NT$ {state.total}
              </td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};
export default Cart;
