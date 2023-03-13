import React from "react";

export default function Cart(props) {
  let { cart, handleQuantity, handleDelete } = props;
  let renderTbody = () => {
    return cart.map((item) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <button
              onClick={() => {
                handleQuantity(item.id, -1);
              }}
              className="btn btn-danger"
            >
              -
            </button>
            <span className="mx-3">{item.soLuong}</span>
            <button
              onClick={() => {
                handleQuantity(item.id, 1);
              }}
              className="btn btn-success"
            >
              +
            </button>
          </td>
          <td>{item.price * item.soLuong}$</td>
          <td>
            <img src={item.image} style={{ width: "3rem" }} />
          </td>
          <td>
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
              className="btn btn-danger"
            >
              Delete
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table className="table">
        <thead className="text-center">
          <td>ID</td>
          <td>Name</td>
          <td>Quantity</td>
          <td>Price</td>
          <td>Image</td>
          <td>Action</td>
        </thead>
        <tbody>{renderTbody()};</tbody>
      </table>
    </div>
  );
}
