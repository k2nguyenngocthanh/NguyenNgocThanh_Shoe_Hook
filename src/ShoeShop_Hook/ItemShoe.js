import React from "react";

export default function ItemShoe(props) {
  let { item, handleAddToCart } = props;
  return (
    <div className="col-3 p-4">
      <div className="card">
        <img
          className="card-img-top"
          src={item.image}
          
        />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.description}</p>
          <button
            onClick={() => {
              handleAddToCart(item);
            }}
            className="btn btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
