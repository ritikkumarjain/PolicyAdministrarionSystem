import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import LoginHeader from '../Header/LoginHeader.js';
import './Login.css';


const Login = () => {

    const [username, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    

    async function handleSubmit(e) {
        e.preventDefault();
        let postData = { username, password };
        await fetch("http://3.110.145.112/api/Auth", {
            method: "POST",
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.status === 404) {
                    alert("Wrong UserName or Pasword");
                    return;
                }
                localStorage.setItem("user-info", JSON.stringify(data));
                if (localStorage.getItem("user-info") == null) {
                    navigate("/")
                }
                else {
                    navigate("/Home")
                }
            });

    }



    return (
        <>
            <LoginHeader />
            <div className="loginHead">
                <h1 className="lead display-3">Policy Adminstration System</h1>
            </div>
            <div className="loginForm">
                <h1 className="lead display-6">Log in to continue</h1>
                <form >
                    <div>
                        <label htmlFor="username">Name</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password" />
                    </div>

                    <button type="submit" onClick={(e) => handleSubmit(e)} className="loginButton btn-btn-primary">Log In</button>

                </form>
            </div>
        </>
    );
};

export default Login;


// async function handleSubmit() {
//     console.log(name, password);
//     let postData = { name, password };
//     await fetch("https://localhost:44369/api/Auth", {
//         method: "POST",
//         headers: new Headers({
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         }),
//         body: JSON.stringify(postData)
//     })
//         .then(response => response.json())
//         .then(result => {
//             localStorage.setItem("user-info", JSON.stringify(result));
//             console.log(result);
//             navigate("/Home")

//         })
//         .catch(error => {
//             alert("Error Occured");
//             window.location.reload();
//         });


// }