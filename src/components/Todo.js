import React, { useState } from "react";
import "./Todo.css";
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { setInput, addTask, deleteTask } from "../Redux/CardSlice";



function Todo() {
  const [buttonValue, setButtonValue] = useState(false);


  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.card;
  });
  const inits = useSelector((state) => {
    return state.todo;
  });

  function handleCreate(e) {
    e.preventDefault();
    setButtonValue(false)
    dispatch(addTask());

  }

  const navigate = useNavigate();

  const handleButton = () => {
    setButtonValue(true);
  };

  const handleCancel = () => {
    setButtonValue(false);
  };
  const handlePath = (data) => {
    navigate(`/list-detail/`);
  };
 
  return (
    <div className="task-body">
      <div>
        <div className="new-tabe">
          <button onClick={handleButton}>New List</button>
        </div>
        {buttonValue ? (
          <div className="inp-div">
            <form>
              <div className="inp-box">
                <p>List Name</p>
                <input
                  type="text"
                  placeholder="Enter Task"
                  value={init.input}
                  onChange={(e) => dispatch(setInput(e.target.value))}

                />
                <button type="submit" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" onClick={handleCreate}>
                  Create List
                </button>
              </div>
            </form>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="multilist">
        {init.tasks.map((heading, index) => {
          return (
            <div className="box-list">  
              <i className="fa fa-trash-o" aria-hidden="true" onClick={() => dispatch(deleteTask(index))}></i>
              <div className="box-task" onClick={() => handlePath(heading)}>
                <div>
                {inits.tasks.length === 0 ? (
                    <p>No Data</p>
                  ) : (
                    inits.tasks.map((task, i) => {
                      return <p key={i}>{task}</p>;
                    })
                  )}
                </div>
              </div>
              <h3>{heading}</h3>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Todo;
