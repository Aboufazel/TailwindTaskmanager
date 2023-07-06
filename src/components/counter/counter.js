import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {incrementAction , decrementAction} from "../../Redux-toolkit/slice/counterSlice";


function Counter() {



    const dispatch = useDispatch()

    const value = useSelector(state => state.counter.value)

    return(
        <div className={"flex flex-col"}>
            Value : {value}

            <button onClick={()=>dispatch(incrementAction(5))}>Increments +5</button>
            <button onClick={()=>dispatch(decrementAction())}>Decrements</button>
        </div>
    )
}



export default Counter;