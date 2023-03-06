import React from "react";
import "./App.css";
// import Todolist from "./Todolist";
import {Todolist} from "./Todolist";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App(): JSX.Element {
// JSX =>
    const tasks: TaskType[] = [
        {id: 1, title: "HTML & CSS", isDone: true},
        {id: 2, title: "CSS & SCSS", isDone: true},
        {id: 3, title: "ES6/TS", isDone: false},
    ]
    const name01 = "What to learn"
    const name02 = "What to buy"
    const name03 = "What to eat"
    const name04 = "What to read"
    return (
        <div className="App">
            <Todolist title={name01} tasks={tasks}/>
            <Todolist title={name02} tasks={tasks}/>
            <Todolist title={name03} tasks={tasks}/>
            <Todolist title={name04} tasks={tasks}/>

        </div>
    );
}

export default App;

