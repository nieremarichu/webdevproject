import React, { Component } from 'react';
import "./Admin.css";
import AddRoute from './ForTheRequests/AddRoute';
import DeleteRoute from './ForTheRequests/DeleteRoute';
import ChangeRoute from './ForTheRequests/ChangeRoute';
import Retrieve from './ForTheRequests/Retrieve';

class Options extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addRoute: false, 
            deleteRoute: false,
            changeRoute: false,
            retrieveData: false
        }
    }
    render() {
        if (this.state.addRoute) {
            return (
                <AddRoute></AddRoute>
            )
        }if(this.state.deleteRoute){
            return(
                <DeleteRoute></DeleteRoute>
            )
        }if(this.state.changeRoute){
            return(
                <ChangeRoute></ChangeRoute>
            )
        }if(this.state.retrieveData){
            return(
                <Retrieve></Retrieve>
            )

        } else {
            return (
                <div id="simdash">
                    <button onClick={(e) => this.setState({ addRoute: true })}>Add Another Route</button><br></br>
                    <button onClick={(e) => this.setState({deleteRoute: true})}>Delete A Route</button><br></br>
                    <button onClick={(e) => this.setState({changeRoute: true})}>Change A Route</button><br></br>
                    <button onClick={(e) => this.setState({retrieveData: true})}>Retrieve All Data</button>
                </div>
            )
        }
    }
}
export default Options;