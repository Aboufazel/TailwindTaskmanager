import './App.css';

import {Provider} from "react-redux";
import store, {persistor} from "./Redux-toolkit/store";
import TaskList from "./components/taskList/taskList";
import {PersistGate} from "redux-persist/integration/react";
import DoingList from "./components/doingList/doingList";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";


function App() {


    const queryClient = new QueryClient()


    return (


        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <QueryClientProvider client={queryClient}>
                    <div className={"grid grid-cols-12 gap-3 p-3"}>
                        <TaskList/>
                        <DoingList/>
                    </div>
                </QueryClientProvider>
            </PersistGate>
        </Provider>

    );
}

export default App;
