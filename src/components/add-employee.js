import React from 'react';
export class EmployeeForm extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.input = React.createRef();
    }

    handleSubmit = (event) => {
        alert(this.input.current.value + " ID HAS BEEN ADDED !!")
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Employee ID :
                <input type="text" name="eid" ref={this.input}></input>
                </label>
                
                <input type="submit" value="Submit"></input>
            </form>
        )
    }

}