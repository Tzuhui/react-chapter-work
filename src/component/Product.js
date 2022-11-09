import { useContext, useState } from 'react';
import { ParentContext } from '../store';
const Product = () => {
  const [state, dispatch] = useContext(ParentContext)
  const addToCart = (data) => {
    dispatch({ type: 'ADD_TO_CART', payload: {...data, qty: 1} });
  };
  const [productData] = useState([
    {
      id: 'NFrUX98nwTKAzD',
      img:
        'https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1406&q=80',
      price: 120,
      title: '鮮果優格餐',
    },
    {
      id: 'NFrU1lXCmNuKOm',
      img:
        'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      price: 210,
      title: '全蔬食健康餐',
    },
    {
      id: 'NFrTUDhZSh5BV',
      img:
        'https://images.unsplash.com/photo-1448043552756-e747b7a2b2b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1352&q=80',
      price: 369,
      title: '酒蒸蛤蠣',
    },
    {
      id: 'NFrR9-OntFZXgb',
      img:
        'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80',
      price: 300,
      title: '綜合特調果汁',
    },
    {
      id: 'NFCsIcKeaonlaV',
      img:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1689&q=80',
      price: 999,
      title: '巧克力蛋糕',
    },
    {
      id: 'FCsIHg_KUX77Q',
      img:
        'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1551&q=80',
      price: 85,
      title: '德式黑森林蛋糕',
    },
    {
      id: 'NFCsI3O2iM-EO5',
      img:
        'https://images.unsplash.com/photo-1551059429-99854e8cd219?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80',
      price: 250,
      title: '千層奶油酥派',
    },
    {
      id: 'NFCsHmIwzg0EoY',
      img:
        'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2075&q=80',
      price: 130,
      title: '香草榛果蛋糕',
    },
    {
      id: 'NFCsEZri90BcGv',
      img:
        'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      price: 77,
      title: '巧克力杯子蛋糕',
    },
    {
      id: 'NFCsEI1lLn4M5',
      img:
        'https://images.unsplash.com/photo-1616486447077-f8d3f7bae6b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
      price: 899,
      title: '串燒組合',
    },
  ]);
  return (
    <div className="row my-3">
      {productData.map((item) => (
        <div className="col-md-4 mb-2" key={item.id}>
          <div className="card">
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">
                {item.title}
                <span className="float-end">NT$ {item.price}</span>
              </h6>
              <a
                href="/"
                className="btn btn-outline-primary w-100"
                onClick={(e) => {
                  e.preventDefault();
                  addToCart(item);
                }}
              >
                加入購物車
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Product;
