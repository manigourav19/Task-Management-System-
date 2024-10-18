// Step -5

import * as actionTypes from "./task-types"

export const addToTask = (itemID) => {
  return {
    type: actionTypes.ADD_TO_TASK,
    payload: {
      _id: itemID,
    },
  };
};


export const removeFromTask = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_TASK,
    payload: {
      _id: itemID,
    },
  };
};


export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      _id: itemID,
      qty,
    },
  };
};


export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};


// export const sortTheTask = (data) => {
//   return {
//     type: actionTypes.SORT_THE_TASKS,
//     payload: data

//   };
// };


export const filterTasks = (Data, type) => {
  return{
    type: actionTypes.FILTER_BY_TYPE,
    payload: {
      type: type,
      Data:  type === ""
      ? Data.tasks
      : Data.tasks.filter((task) => task.type.indexOf(type) >= 0),

    }

  };
};

