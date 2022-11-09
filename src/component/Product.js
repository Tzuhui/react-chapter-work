import { useContext, useState } from 'react';
import { ParentContext } from '../store';
const Product = () => {
  const [state, dispatch] = useContext(ParentContext)
  const addToCart = (data) => {
    dispatch({ type: 'ADD_TO_CART', payload: data });
  };
  const [productData] = useState([
    {
      img: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80',
      title: '爽快快的',
      price: 60,
      id: 'AA123',
    },
    {
      img: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80',
      title: '爽歪歪的',
      price: 120,
      id: 'BB123',
    },
    {
      img: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80',
      title: '爽11的',
      price: 120,
      id: 'CC123',
    },
    {
      img: 'https://images.unsplash.com/photo-1597733153203-a54d0fbc47de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1090&q=80',
      title: '爽22的',
      price: 180,
      id: 'DD123',
    },
  ]);
  console.log("Product")
  return (
    <div className="row my-3">
      {productData.map((item) => (
        <div className="col-md-4 mb-2" key={item.id}>
          <div className="card">
            <img src={item.img} className="card-img-top" alt="..." />
            <div className="card-body">
              <h6 className="card-title">
                {item.title}
                <span className="float-end">${item.price}</span>
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
