import React, { Fragment } from 'react';
import './App.css';
import InputTodo from './components/InputTodo'
import TodoList from './components/TodoList';


function App() {
  return <Fragment>
    <div className="container">
      <InputTodo />
      <TodoList />
    </div>
  </Fragment>;
}

export default App;
