import React from 'react';
import './footer.css'
export class Footer extends React.Component{

    render(){
        return(
            <footer>
                {this.props.msg}
            </footer>
        )
    }
}