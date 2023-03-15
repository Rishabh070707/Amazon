import React from "react";
import "./Cartitem.css";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { IconButton } from "@mui/material";
import { Statevalue } from "./StateContex";

function Cartitem({ id, img, title, price, rating }) {
  const [{ cart }, dispatch] = Statevalue();

  function handleRemove(e, id) {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  }
  return (
    <div className="cartitem__div">
      <img src={img} alt="" />
      <div className="cartitem__des">
        <b>{title}</b>
        <div className="cartitem__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
              </span>
            ))}
        </div>

        <div className="Cartitem__price">
          <strong>$ {price}</strong>
        </div>

        <button
          onClick={(e) => {
            handleRemove(e, id);
          }}
        >
          Remove item
        </button>
      </div>
    </div>
  );
}

export default Cartitem;
