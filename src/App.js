
import './App.css';

import {Provider} from "react-redux";
import store from "./Redux-toolkit/store";
import Counter from "./components/counter/counter";
import TaskList from "./components/taskList/taskList";

function App() {
  return (
      <Provider store={store}>
        <div className={"grid grid-cols-12 gap-3 p-3"}>
            <TaskList/>
            <TaskList/>
            <TaskList/>
            <TaskList/>
        </div>
      </Provider>
  );
}

export default App;
