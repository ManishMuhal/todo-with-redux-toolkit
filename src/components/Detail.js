import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import { setInput, addTask, deleteTask, editTask, updatePriority } from "../Redux/Detailslice";
import { pushToArray } from '../Redux/CardSlice'
import "./Detail.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";



function Detail() {
  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.todo;
  });

  const listId = 1;

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask());
    const taskName = init.input;


    const receivedData = {
      id: listId,
      additionalData: [
        ...init.tasks.map((task) => ({ name: task })),
        { name: taskName },
      ],
    };
    dispatch(pushToArray({ receivedData, itemToPush: { name: taskName } }));

  }

  const handlePriorityChange = (event, index) => {
    const selectedPriority = event.target.value;

    // Update the priority of the selected task in Redux state
    const updatedTasks = init.tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, priority: selectedPriority };
      }
      return task;
    });

    // Dispatch the updated tasks to Redux
    dispatch(updatePriority(updatedTasks));
  };

  return (
    <div className="List-input">
      <div className="Todos">
      {init.tasks.map((task, index) => {
  return (
    <div className="Detail-page" key={index}>
      <div className="boxex">
        <div className="Accordians">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className="edit-icon">
                <div className="task">
                  <p>{task.name}</p> {/* Render the 'name' property */}
                </div>
                <div className="right-icon">
                  <i
                    className="fa fa-edit"
                    onClick={() => dispatch(editTask(index))}
                  ></i>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className="divide">
                <div className="note">
                  <textarea defaultValue="Enter Your Notes"></textarea>
                </div>
                <div>
                  <div className="options">
                    <div className="date">
                      <p>Priority: {task.priority}</p> {/* Render the 'priority' property */}
                      <select
                        name="Priority"
                        id="Priority"
                        onChange={(e) => handlePriorityChange(e, index)} // Handle priority change here
                        value={task.priority}
                      >
                        <option value="None">None</option>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                      </select>
                      <button
                        onClick={() => dispatch(editTask(index))}
                      >
                        Edit
                      </button>
                      <button onClick={() => dispatch(deleteTask(index))}>
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
})}

      </div>
      <div className="bottom">
        <div className="icc">
          <AddIcon />
        </div>
        <div className="bcc">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="New task..."
              value={init.input}
              onChange={(e) => dispatch(setInput(e.target.value))}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Detail;

