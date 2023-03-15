import { useEffect, useState } from "react";
import "./Cart.css";
import Cartitem from "./Cartitem";

import { Statevalue } from "./StateContex";

function Cart() {
  const [price, setPrice] = useState();
  const [{ cart }, dispatch] = Statevalue();

  useEffect(() => {
    setPrice(cart.reduce((acc, crr) => acc + crr.price, 0));
  }, [cart]);
  return (
    <div className="cart__main">
      <div className="cart">
        <div className="cart__left">
          <img
            src="https://img.freepik.com/premium-photo/
          shopping-cart-yellow-bright-background-with-day-light
          -supermarket-trolley-ad-banner-with-copy_361816-3226.jpg?w=2000"
            alt=""
          />
        </div>
        <div className="cart__right">
          <p className="cart__info">
            <small>TotalItem</small>
            <strong>{cart.length}</strong>
          </p>
          <p className="cart__info">
            <small>TotalPrice</small>
            <strong>{price}</strong>
          </p>
          <button>Check out</button>
        </div>
      </div>

      <div className="cart__items">
        <h1>User : </h1>
        <hr />
        <div className="cart__item">
          {cart.map((result) => (
            <Cartitem
              key={result.id}
              id={result.id}
              title={result.title}
              img={result.img}
              price={result.price}
              rating={result.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
