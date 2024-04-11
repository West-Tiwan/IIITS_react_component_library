import React from 'react';
import './RegisterForm.css';

const RegisterForm = (props) =>{
    return(
        <div>
        <form method={(props.method)?props.method:"post"} action={(props.action)?props.action:"/register"} target={(props.target)?props.target:"_self"}>
            <label>Username</label>
            <input id="username" name="username" type="text" placeholder="Enter your name" required/>
            <label>Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" required/>
            <label>Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
            <button type="submit">{(props.button_text)?props.button_text:"Register"}</button>
        </form>
        </div>
    )
}

export {RegisterForm};