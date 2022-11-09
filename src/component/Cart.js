import { useContext } from 'react';
import { ParentContext } from '../store';

const Cart = () => {
  const [state] = useContext(ParentContext);
  console.log("Cart")
  return (
    <div className="bg-light p-4 my-4">
      {state.cartList.length === 0 ? (
        <div>購物車沒有任何品項</div>
      ) : (
        <table className="table align-middle">
          <tbody>
            {state.cartList.map((item, index) => (
              <tr key={`${item.id}_${index}`}>
                <td width="100">
                  <a href="/" className="text-dark">
                    <i className="fas fa-times"></i>
                  </a>
                </td>
                <td style={{ width: '100px' }}>
                  <img src={item.img} className="table-image" alt="" />
                </td>
                <td>{item.title}</td>
                <td width="200">
                  <select name="" id="" className="form-select">
                    <option value="1">1</option>
                  </select>
                </td>
                <td width="200" className="text-end">
                  NT$ {item.price}
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
