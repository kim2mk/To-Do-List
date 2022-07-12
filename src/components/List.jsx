import React, {useState} from "react";

const List = () => {
    let [task, setTask] = useState("");

    let [listOfTasks, setListOfTasks] = useState([]);

    let [hasClick, setHasClick] = useState(false);

    const submitTask = (e)=>{
        e.preventDefault();
        let taskObj =  {task};
        console.log(taskObj);

        setListOfTasks([...listOfTasks, taskObj])
    }

    const deleteToDo = (e,idx)=>{
        let filteredCopy = listOfTasks.filter((todo, i)=>{
            return i!=idx
        })
        setListOfTasks(filteredCopy);
    }

    const toggleCross = (e,idx)=>{
        let copyOfToDoList = [...listOfTasks];

        copyOfToDoList[idx].hasClick = e.target.checked;

        setListOfTasks(copyOfToDoList);
    }

    return (
        <>
            <form onSubmit={submitTask}>
                <div className="form-group">
                    <label>To Do:</label>
                    <input onChange={(e)=>setTask(e.target.value)} type="text"/>
                </div><br/>
                <input type="submit" value="Add" className="submit btn btn-success"/>
            </form>
            <hr />
            {
                listOfTasks.map((todo, idx)=>{
                    return(
                        <div key={idx} style={{textDecoration: todo.hasClick? 'line-through': ""}}>
                            <h3>
                                {todo.task}
                                <input className="m-2" type="checkbox" onClick={(e)=>toggleCross(e,idx)}/>
                                <button onClick={(e)=>deleteToDo(e,idx)} className="btn btn-danger m-1">Delete</button>
                            </h3> 
                        </div>
                    )
                })
            }
        </>
    )
}

export default List;