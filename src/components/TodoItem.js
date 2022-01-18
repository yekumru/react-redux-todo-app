import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodoAsync , toggleCompleteAsync } from "../redux/todoSlice";

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();

  const handleCompleteCheck = () => {
    dispatch(toggleCompleteAsync({ id: id, completed: !completed }));
  };

  const handleDeleteTodo = () => {
    dispatch(deleteTodoAsync({ id: id }));
  };
  return (
    <li className="list-group-item p-3">
      <div className="d-flex justify-content-between">
        <span className="d-flex align-items-center">
          <input
            type="checkbox"
            className="ml-3 mr-3"
            checked={completed}
            onChange={handleCompleteCheck}
          ></input>
          <span className="ml-5">{!completed ? title : <s>{title}</s>}</span>
        </span>
        <button onClick={handleDeleteTodo} className="btn btn-outline-danger fs-12">
        <h5><i className="fa fa-trash fa-lg"> </i></h5>
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
