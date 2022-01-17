import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

const AddTodoForm = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
      dispatch(
        addTodo({
          title: value,
        })
      );
  };

  return (
    <form onSubmit={onSubmit} className="form mt-3 mb-3">
      <div className="form-row w-full d-flex justify-content-between mt-4">
        <div className="offset-2 col-7">
          <input
            type="text"
            className="form-control text-muted mb-2"
            placeholder="New Task"
            value={value}
            onChange={(event) => setValue(event.target.value)}
          ></input>
        </div>
        <div className="col-3">
          <button
            type="submit"
            disabled={value !== "" ? false : true}
            className="btn btn-primary mb-2"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddTodoForm;
