import React from 'react';
import './LoginForm.css';

const LoginForm = (props) =>{
    return(
        <form method={props.method} action={props.action} target={props.target}>
            <label>Email or Username</label>
            <input id="email" name="email" type="email" placeholder="Enter your ID"/>
            <label>Password</label>
            <input id="password" name="password" type="password" placeholder="Enter your password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
            <button type="submit">Submit</button>
        </form>
    )
}

export {LoginForm};