import './App.css';

import {Provider} from "react-redux";
import store, {persistor} from "./Redux-toolkit/store";
import TaskList from "./components/taskList/taskList";
import {PersistGate} from "redux-persist/integration/react";
import DoingList from "./components/doingList/doingList";

function App() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <div className={"grid grid-cols-12 gap-3 p-3"}>
                    <TaskList/>
                    <DoingList/>
                </div>
            </PersistGate>
        </Provider>
    );
}

export default App;
