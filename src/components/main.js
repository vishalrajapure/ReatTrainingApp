import React from 'react';

export class MainComponent extends React.Component {
     listOfEmps = [
        { eid: 101, ename: "John", esal: 58488, desgn: "SE", profilePic: "/images/john.jpg" },
        { eid: 101, ename: "Sam", esal: 8565, desgn: "SSE", profilePic: "/images/sam.jpg" },
        { eid: 101, ename: "Dev", esal: 89563, desgn: "SA", profilePic: "/images/john.jpg" },
        { eid: 101, ename: "Harry", esal: 78521, desgn: "SSE", profilePic: "/images/sam.jpg" },
        { eid: 101, ename: "Jason", esal: 9856, desgn: "SE", profilePic: "/images/john.jpg" }
    ];
    render() {
        return (   
            <div className="row">
                {this.listOfEmps.map((emp) => {
                        return (
                            <div className="col-sm-4">
                                <div className="card">
                                    <img className="card-img-top" src={emp.profilePic} alt="Card cap"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{emp.ename}</h5>
                                        <p className="card-text">Employee ID : {emp.eid}</p>
                                        <p className="card-text">Employee Salary : {emp.esal}</p>
                                        <p className="card-text">Employee Designation : {emp.desgn}</p>
                                        <a href="www.google.com" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        );
    }
}