import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import './logoutbutton.css'

const LogoutButton = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const onLogout = async (e) => {
    await dispatch(logout());
  };
  if (user) {
  return <button className='logout_button' onClick={onLogout}>Logout</button>;
  } else {
    return null
  }
};

export default LogoutButton;
