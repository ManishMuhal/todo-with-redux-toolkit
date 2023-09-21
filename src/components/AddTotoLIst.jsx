import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import '../components/Detail.css';

function AddTodoList(props) {
    const deleteTodo = () => {
        props.onCheck(props.id);
      };
    return (
        <>
            <div className="Detail-page" >
                <div className="boxex">
                    <div className="Accordians">
                        <Accordion >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header">
                                <Typography>        
                                    <p></p>      
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="divide">
                                    <div className="note">
                                        <textarea  defaultValue=" Enter Your Notes"></textarea>
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
                                            
                                            <button >ss</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </div>

        </>
    )
}
export default AddTodoList;