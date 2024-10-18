import React from "react";
import "../styles/TaskItems.css";

import { connect } from "react-redux";
// Step -- 8
import { removeFromTask } from "../redux/Task/task-actions";

function TaskItem({ itemData, removeFromTask }) {
  return (
    <div className="cartItem">
      <img
        className="cartItem__image"
        src={itemData.image}
        alt={itemData.title}
      />
      <div className="cartItem__details">
        <p  style={{ fontWeight: "bold",fontSize: "15px"}} className="styles.details__title">{itemData.title}</p>
        <p className="details__desc">
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>
            Task Information:{" "}
          </span>
          {itemData.desc}
        </p>
        <p className="details__price">{itemData.deadline} days</p>
      </div>
      <div className="cartItem__actions">
        <button
          onClick={() => removeFromTask(itemData._id)}
          className="actions__deleteItemBtn"
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // adjustQty: (_id, value) => dispatch(adjustItemQty(_id, value)),
    removeFromTask: (_id) => dispatch(removeFromTask(_id)),
  };
};

export default connect(null, mapDispatchToProps)(TaskItem);
