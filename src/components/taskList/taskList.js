import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addTaskAction , deleteTaskAction , editTaskAction} from "../../Redux-toolkit/slice/categorySlice";

const TaskList = () => {



    const [value , setValue] = useState({title:""})

    const taskList = useSelector(state => state.category);
    const dispatch = useDispatch();

    const manageChange = (e)=>{
        setValue({...value, [e.target.name]: e.target.value});
    }




    const manageEdit = (title)=>{
        setValue({title: title});
    }
    const manageSubmit = (e) =>{
        e.preventDefault();
        dispatch(addTaskAction({id:Math.random() * 1000 ,title:value.title}));
        setValue({title: ""});
    }

    const manageRemove = (id)=>{
        dispatch(deleteTaskAction(id));
    }


    return(
        <div className={"col-span-3 gap-3 flex flex-col p-2 h-[85vh] backdrop-blur-sm shadow-md rounded-2xl bg-white/30"}>
            <h1 className={"font-black text-gray-600 text-xl mb-5"}>
                To Start
            </h1>

            <form onSubmit={manageSubmit} className={"mb-3"}>
                <input name={'title'} type={"text"} value={value.title} onChange={manageChange} placeholder={"enter task title"}/>

                <button type={"submit"}>
                    Create Task
                </button>
            </form>

           <div className={"flex flex-col gap-3 py-5 h-[500px] overflow-y-scroll"}>
               {
                   taskList.map(item => (
                       <div key={item.id} className={"flex flex-col gap-3 bg-blue-50 h-32 p-2 rounded-lg shadow-neutral-200 shadow-sm"}>
                           {item.title}

                           <button onClick={()=>manageRemove(item.id)} className={"bg-red-500 text-white"}>
                               delete Task
                           </button>

                           <button onClick={()=>manageEdit(item.title)} className={"bg-amber-600 text-white"}>edit task tile</button>
                       </div>
                   ))
               }
           </div>
        </div>
    )
}



export default TaskList;