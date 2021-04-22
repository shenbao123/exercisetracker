// npm install bootstrap
// npm install react-router-dom
// npm install react-datepicker
// npm install axios

import NavBar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";

import CreateUser from "./components/create-user.component";
import UserList from "./components/users-list.component";
import EditUser from "./components/edit-user.component";
import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="container">
        <NavBar/>
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
        <Route path="/list" component={UserList} />
        <Route path="/user/edit/:id" component={EditUser} />
      </div>
    </Router>
  );
}

export default App;
