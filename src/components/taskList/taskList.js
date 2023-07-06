import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTaskAction} from "../../Redux-toolkit/slice/categorySlice";

const TaskList = () => {



    const [value , setValue] = useState({title:""})

    const taskList = useSelector(state => state.category);
    const dispatch = useDispatch();

    const manageChange = (e)=>{
        setValue({...value, [e.target.name]: e.target.value});
    }


    const manageSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTaskAction({id:2 ,title:value.title}));
        setValue({title: ""});
    }

    console.log(taskList);


    return(
        <div className={"col-span-3 gap-3 flex flex-col p-2 h-[85vh] bg-neutral-50"}>
            <h1 className={"font-black text-3xl mb-5"}>
                To Start
            </h1>

            <form onSubmit={manageSubmit} className={"mb-3"}>
                <input name={'title'} type={"text"} value={value.title} onChange={manageChange} placeholder={"enter task title"}/>

                <button type={"submit"}>
                    Create Task
                </button>
            </form>

            {
                taskList.map(item => (
                    <div key={item.id} className={"bg-white p-2 rounded-lg shadow-neutral-200 shadow-sm"}>
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}



export default TaskList;