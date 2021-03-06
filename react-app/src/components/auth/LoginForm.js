import React, { useState } from "react";
import  { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { login } from "../../store/session";
import './login.css';
// import mango from '../../store/mango-logo.png';

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(username, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const demoSubmit = async (e) => {
    setUsername('hmang42')
    setPassword('123456')
  }

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/home" />;
  }

  return (
    <main>
      <div className='login_contain'>
        <div className='title'>Login to Mango Music!</div>
        <div className='form'>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error) => (
              <div>{error}</div>
            ))}
          </div>
          <div>
            <input
              className="username"
              name="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={updateUsername}
            />
          </div>
          <div>
            <input
              name="password"
              type="password"
              className='password_login'
              placeholder="Password"
              value={password}
              onChange={updatePassword}
            />
          </div>
            <button className='login' type="submit">Login</button>
            <br></br>
            <button 
            type="submit" 
            onClick={demoSubmit} 
            className="demoSubmitButton"
            >Demo Login</button>
        </form>
        </div>
        <div className="not">
          <p>Not a Mango Music member? <NavLink to='/sign-up'>Sign up here</NavLink></p>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
