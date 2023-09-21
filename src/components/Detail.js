import AddIcon from "@mui/icons-material/Add";
import "./Detail.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";
import { setInput, addTask, deleteTask, editTask } from "../Redux/slice";



function Detail() {
 

  const dispatch = useDispatch();
  const init = useSelector((state) => {
    return state.todo;
  });

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addTask());
  
  }

  return (

    <div className="List-input" >
      <div className="Todos" >
        {init.tasks.map((task, index) => {
          return ( 
            <div className="Detail-page" key={index} >
              <div className="boxex">
                <div className="Accordians">
                  <Accordion >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header">
                      <Typography>
                        <p>{task} </p>
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="divide">
                        <div className="note">
                          <textarea defaultValue=" Enter Your Notes"></textarea>
                        </div>
                        <div>

                          <div className="options">


                            <div className="date">
                              <div>Due Date</div>
                              <button>Today</button>
                              <button>Tomorrow</button>

                              <p>Priority</p>
                              <select>
                                <option value="">None</option>
                                <option value="High">High</option>
                                <option value="Medium">Medium</option>
                                <option value="Low">Low</option>
                              </select>
                              <button onClick={() => dispatch(editTask(index))}>Edit</button>
                              <button onClick={() => dispatch(deleteTask(index))} >Delete</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              </div>
            </div>
          )
        })}

      </div>

      <div className="bottom">
        <div className="icc"><AddIcon /></div>
        <div className="bcc">
          <form onSubmit={handleSubmit}>

            <input type="text" placeholder="New task..."
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