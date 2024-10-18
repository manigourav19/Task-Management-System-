import "../styles/TaskScreen.css";

import Task from "../components/Task";

// Redux
import { connect } from "react-redux";
import { useState } from "react";

function TaskScreen({ Data }) {
  const [_type, setType] = useState({
    type: "",
  });

  function changeHandler(event) {
    if (event.target.value === "") {
      setType({
        type: event.target.value,
      });
    } else if (event.target.value === "software") {
      setType({
        type: "software",
      });
    } else if (event.target.value === "workforce") {
      setType({
        type: "workforce",
      });
    } else if (event.target.value === "business") {
      setType({
        type: "business",
      });
    }
  }


  function show(event) {
  
      
    
  }

  const Filtered = Data.tasks.filter((task) => task.type[0] === _type.type);

  return (
    <div className="taskScreen">
      <div className="homescreen">
        <div className="container text-center">
          <h1 className="mt-3 " style={{ fontSize: "3rem", color: "#212529" }}>
            Tasks
          </h1>
          <hr className="w-25 mx-auto" />
        </div>

        {/* Filter  */}
        <div
          className="filter"
          style={{
            display: "flex",
            margin: "30px 19px",
            justifyContent: "space-between",
            backgroundColor: "#469bbd",
            padding: "10px",
          }}
        >
          <div
            className="filter-result"
            style={{ color: "white", fontSize: "19px" }}
          >
            {Data.tasks.length} Tasks
          </div>
          <div
            className="filter-sort"
            style={{ color: "white", fontSize: "19px" }}
          >
            Task Duration{" "}
            <select value="" onChange="">
              <option>Latest</option>
            </select>
          </div>
          <div
            className="filter-size"
            style={{ color: "white", fontSize: "19px" }}
          >
            Task Category{" "}
            <select value={_type.type} onClick={show} onChange={changeHandler}>
              <option value="">ALL</option>
              <option value="software">software</option>
              <option value="workforce">workforce</option>
              <option value="business">business</option>
            </select>
          </div>
        </div>

        {/* // Filter End */}

        {_type.type === "" ? (
          <div className="taskScreen__tasks">
            {Data.tasks.map((task) => {
              return <Task key={task._id} taskData={task} />;
            })}
          </div>
        ) : (
          <div className="taskScreen__tasks">
            {Filtered.map((task) => {
              return <Task key={task._id} taskData={task} />;
            })}
          </div>
        )}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  // Data from The Task-Reducers
  return {
    Data: state.taskShop.Data,
  };
};

export default connect(mapStateToProps)(TaskScreen);
