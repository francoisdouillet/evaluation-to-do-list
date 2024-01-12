import { Provider } from "react-redux";
import "./App.css";
import TaskForm from "./components/TaskForm";
import store from "./store/store";
import TaskList from "./components/TaskList";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import TaskModification from "./components/TaskModification";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route
            path={"/"}
            element={
              <>
                <TaskForm />
                <TaskList />
              </>
            }
          />
          <Route path={"/:id"} element={<TaskModification />}/>
        </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
