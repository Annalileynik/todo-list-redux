import React  from 'react';
import {connect} from "react-redux";
import EditModal from "./EditModal";
import "bootstrap/dist/css/bootstrap.min.css"
const TodoListItem = (props) => {

    return (
 <ul>
            <li> {props.item.title} <br/>
<EditModal
    key={props.item.id}
    item={props.item}/><br/>
                <button className='btn btn-outline-secondary' onClick={()=>props.deleteTask(props.item)}>Delete</button>
            </li>

        </ul>

    );
};

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id)=>dispatch({type: "DELETE_TASK", payload:id})
})
export default connect(null, mapDispatchToProps)(TodoListItem);;