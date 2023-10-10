
import React, { useState } from "react";
import "./Todo.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { pushToArray, createList } from "../Redux/CardSlice";
import { useEffect } from "react";
import { deleteList } from "../Redux/CardSlice"; // Import the deleteList action
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';

function Todo() {
  const [buttonValue, setButtonValue] = useState(false);
  const [inputvalue, setinputvalue] = useState("");
  const ListItem = useSelector((state) => state.List);
  const [checkedItems, setCheckedItems] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => { }, [ListItem]);

  // function handleCreate(e) {
  //   e.preventDefault();
  //   setButtonValue(false);
  //   dispatch(pushToArray());
  // }

  const handleButton = () => {
    setButtonValue(true);
  };

  const handleCancel = () => {
    setButtonValue(false);
  };

  const handlePath = (data) => {
    navigate(`/list-detail/`, {state:data});
  };

  const handleCreateTodo = () => {
    if (inputvalue.trim() !== "") {
      dispatch(createList(inputvalue));
      setinputvalue("");
      setButtonValue(false);
    }
  };

  // Function to handle checkbox change
  const handleCheckboxChange = (event, index) => {
    const isChecked = event.target.checked;
    if (isChecked) {
      setCheckedItems([...checkedItems, index]);
    } else {
      const updatedCheckedItems = checkedItems.filter((item) => item !== index);
      setCheckedItems(updatedCheckedItems);
    }
  };

  // Function to delete selected items
  const handleDeleteSelected = () => {
    const updatedList = ListItem.list.filter((item, index) => !checkedItems.includes(index));
    dispatch(deleteList(updatedList));
    setCheckedItems([]);
  };

  return (
    <div className="task-body">

      <div>
        <div className="new-tabe">
          <Button variant="contained" onClick={handleButton}>
            New List
          </Button>

          <Stack direction="row" >

            <Button variant="contained" startIcon={<DeleteIcon />} onClick={handleDeleteSelected}>
              Delete
            </Button>
          </Stack>
        </div>
        {buttonValue ? (
          <div className="inp-div">
            <form>
              <div className="inp-box">
                <p>List Name</p>
                <input
                  type="text"
                  placeholder="Enter Task"
                  value={inputvalue}
                  onChange={(e) => {
                    setinputvalue(e.target.value);
                  }}
                />

                <button type="submit" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" onClick={() => handleCreateTodo()}>
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


        {ListItem.list.map((item, index) => {
          const isItemChecked = checkedItems.includes(index);

          return (

            <div className="box-list" key={index}>
              <div className="chekbox">
                <input
                  id="check"
                  type="checkbox"
                  checked={isItemChecked}
                  onChange={(event) => handleCheckboxChange(event, index)}
                />
              </div>
              <div className="box-task" onClick={() => handlePath(item.id )}>

                <div>

                  {item?.receivedData?.additionalData.length > 0 ? (
                    item?.receivedData?.additionalData.map((subItem, subIndex) => {
                      console.log("subItem====>>>", subItem);
                      return <p key={subIndex}>{subItem.name}</p>;
                    })
                  ) : (
                    <p>No task</p>
                  )}
                </div>
              </div>
              <h3>{item.name}</h3>
            </div>
          );
        })}
      </div>
      <div className="delete">

      </div>
    </div>
  );
}


export default Todo;