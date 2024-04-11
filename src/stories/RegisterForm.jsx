import React from 'react';
import './RegisterForm.css';

const RegisterForm = (props) =>{
    return(
        <form method={props.method} action={props.action} target={props.target}>
            <label>Name</label>
            <input id="name" name="name" type="text" placeholder="Enter your name" required/>
            <label>Email</label>
            <input id="email" name="email" type="email" placeholder="Enter your email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" required/>
            <label>Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
            <button type="submit">Register</button>
        </form>
    )
}

export {RegisterForm};