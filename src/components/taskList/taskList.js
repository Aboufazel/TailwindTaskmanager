import {useSelector} from "react-redux";

const TaskList = () => {


    const taskList = useSelector(state => state.category);


    console.log(taskList);


    return(
        <div className={"col-span-3 flex flex-col p-2 h-[85vh] bg-neutral-50"}>
            <h1 className={"font-black text-3xl mb-5"}>
                To Start
            </h1>
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