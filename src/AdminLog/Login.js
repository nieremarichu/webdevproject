import React, { Component } from 'react';
import "./Admin.css";
import Options from './Options';
// import swal from 'sweetalert';
// import req from "../helper/api";
import axios from 'axios';
// import api from './helper/api';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            situation: false

        }
    }

    // handleClick(event) {
    //     var apiBaseUrl = "/admindata";
    //     // var self = this;
    //     var payload = {
    //         "username": this.state.username,
    //         "password": this.state.password
    //     }

    //     try {
    //         const response = axios.post('http://demo0725191.mockable.io/post_data', { posted_data: 'example' });
    //         console.log('👉 Returned data:', response);
    //     } catch (e) {
    //         console.log(`😱 Axios request failed: ${e}`);
    //     }

        
    // }

    loginAuth() {
        return new Promise((resolve, reject) => {
            console.log("ing sulod");
            axios.get('http://localhost:3000/jeepme/admindata/')
                .then(res => {
                    console.log("inglahos");
                    console.log(res.data)
                    resolve(res)
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    onclickHandler(e) {
        if (this.state.username !== "" && this.state.password !== "") {
            console.log("edgsd");
            // let errors = this.state.errors;
            this.loginAuth().then(res => {
                console.log("gesdgd");
                if (res.data.body.auth) {
                    console.log(res);
                    this.setState({ situation: true });
                    localStorage.setItem("token", res.data.data.body.accessToken)
                } else {
                    console.log('Invalid Username!') 
                    // password = 'Invalid Password!'
                }
            })
        }else{
            console.log("fgsged")
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ username: e.target.value });
        this.setState({ password: e.target.value });
              
        }
      

    render() {
        if (!this.state.situation) {
            return (
                <center>
                    <div className="card">
                        <h1 id="admin">Admin</h1>
                        <input autoComplete="off" placeholder="Username" type="text" className="w3-input w3-border" id="user" onChange={(e) => this.handleChange(e)}></input><br></br>
                        <input placeholder="Password" type="password" className="w3-input w3-border" id="pass" onChange={(e) => this.handleChange(e)}></input><br></br>
                        <button id="button" onClick={(e) => this.onclickHandler(e)}>Login</button>
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
export default Login;