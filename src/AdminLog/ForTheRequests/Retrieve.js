import React, { Component } from 'react'
import home from './home.png'
import Options from '../Options';

class Retrieve extends Component {
    constructor(props) {
        super(props);
        this.state = {
            home: false
        }
    }
    onclickHome(e) {
        this.setState({ home: true })
    }
    render() {
        if (!this.state.home) {
            return (
                <center>
                    <div>
                        <img src={home} alt="Smiley face" onClick={(e) => this.onclickHome(e)} />
                    </div>
                    <div id="simdash">
                        <h1>Click the button to retrieve all data</h1>
                        <button>Click here!</button>
                    </div>
                </center>
            )
        } else {
            return (
                <Options></Options>
            )
        }
    }
}
export default Retrieve;