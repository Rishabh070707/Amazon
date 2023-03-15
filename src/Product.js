import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IconButton } from "@mui/material";

import "./Product.css";
import { Statevalue } from "./StateContex";

function Product({ id, title, img, price, rating }) {
  const [{ cart }, dispatch] = Statevalue();

  // const initialState = {
  //   cart: [],
  // };
  // const reducer = (state, action) => {
  //   console.log(action);
  //   if (action.type === "ADD") {
  //     return () => {
  //       const _cart = { ...state };
  //       cart = [_cart.cart, action.item];
  //     };
  //   }
  // };
  // const [{ cart }, dispatch] = useReducer(reducer, initialState);
  const addtocart = () => {
    dispatch({
      type: "ADD",
      item: {
        id,
        title,
        img,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product scale-up-center ">
      <div className="product__info">
        <p>{title}</p>
        <div className="Product__price">
          <small>$</small>
          <strong>{price}</strong>
        </div>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i}>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
              </span>
            ))}
        </div>
      </div>
      <img src={img} alt="" className="product__img" />
      <button onClick={addtocart} className="product__button">
        Add to Basket
      </button>
    </div>
  );
}

export default Product;
