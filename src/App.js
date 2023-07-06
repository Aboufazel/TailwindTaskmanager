
import './App.css';

import {Provider} from "react-redux";
import store from "./Redux-toolkit/store";
import TaskList from "./components/taskList/taskList";

function App() {
  return (
      <Provider store={store}>
        <div className={"grid grid-cols-12 gap-3 p-3"}>
            <TaskList/>
        </div>
      </Provider>
  );
}

export default App;
