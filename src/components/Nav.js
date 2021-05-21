import React from 'react';
import { Switch, Route, Router } from "react-router-dom";
import { EmployeeForm } from "./add-employee";
import { MainComponent } from "./main";


export class Nav extends React.Component {


    render() {
        return (
            <Router>
            <div>
                <link to="/add"> Add employee</link>
                <link to="/allemp"> List of employee</link>
                <Switch>
                    <Route path="/add" component={EmployeeForm}></Route>
                    <Route path="/allemp" component={MainComponent}></Route>
                </Switch>
            </div>
            </Router>

        )
    }
}