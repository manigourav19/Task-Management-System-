import React from "react";
import { Link } from "react-router-dom";
import "../styles/Task.css";
import formatCurrency from "../util";

// step 6
import { connect } from "react-redux";
import { addToTask } from "../redux/Task/task-actions"

function Task({ taskData, addToTask }) {
  return (
    <div className="task">
      <img src={taskData.image} alt={taskData.title} />

      <div className="task__info">
        <p
          style={{ fontWeight: "bold", fontSize: "22px" }}
          className="info__name mt-4"
        >
          {taskData.title}
        </p>

        <p className="info__description">
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>
            Task Information:{" "}
          </span>
          {taskData.desc}
        </p>

        <p className="info__price">
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>
            Deadline: {""}
          </span>
          {formatCurrency(taskData.deadline)}
        </p>
        <Link exact to="/task" style={{ textDecoration: 'none' }}>
          <button onClick={() => addToTask(taskData._id)} className="info__button">
            Assign Task
        </button>
        </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToTask: (_id) => dispatch(addToTask(_id)),
    // loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Task);
