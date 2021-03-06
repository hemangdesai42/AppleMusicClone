import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from 'react-router-dom';
import { signUp } from '../../store/session';
import './signup.css';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(name, username, email, password));
    }
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <main>
      <div className='form_container'>
        <div className='title'>Sign Up for Mango Music!</div>
      <form onSubmit={onSignUp}>
        <div className='name_signup'>
          <input
            type="text"
            className="name"
            name="name"
            onChange={updateName}
            value={name}
            placeholder="Name"
          ></input>
        </div>
        <div>
          <input
            className="username_signup"
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
            placeholder="Username"
          ></input>
        </div>
        <div>
          <input
            type="text"
            className="email"
            name="email"
            onChange={updateEmail}
            value={email}
            placeholder="Email"
          ></input>
        </div>
        <div>
          <input
            className="password"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            placeholder="Password"
          ></input>
        </div>
        <div>
          <input
            type="password"
            className="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            placeholder="Confirm Password"
          ></input>
        </div>
        <button className="signup" type="submit">Sign Up</button>
      </form>
      <div className="option">
          <p>Already a Mango Member? <NavLink to='/login'>Log in</NavLink></p>
      </div>
      </div>
    </main>
  );
};

export default SignUpForm;
