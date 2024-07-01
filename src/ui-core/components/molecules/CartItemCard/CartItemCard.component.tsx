import React from "react";
import "./CartItemCard.component.css";
import { CartItemCardProps } from "./CartItemCard.types";
import CartButton from "../../atoms/Button/CartButton.component";

const CartItemCard: React.FC<CartItemCardProps> = ({
  id,
  title,
  image,
  price,
}) => {
  return (
    <div className="card">
      <div className="card-title">
        <h3>
          <b>{title}</b>
        </h3>
      </div>
      <div>
        <img className="cart-card-image" src={image} alt={title} />
      </div>
      <div className="description">
        <h4>{`Rs ${price}`}</h4>
        <br />
        <div className="button-container">
          <CartButton
            itemId={id}
            itemName={title}
            itemImage={image}
            itemPrice={price}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;