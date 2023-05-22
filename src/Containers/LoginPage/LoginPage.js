import React from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../../Components/LoginForm/LoginForm';
import { Credentials } from './LoginCredentials';
import { userLogin } from '../../Store/Redux/authSlice';
import {useDispatch} from "react-redux";
import {toast} from "react-toastify";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = (email, password) => {
    const foundUser = Credentials.find(cred => cred.email === email.toLowerCase() && cred.password === password);

    if (foundUser) {
        const { role } = foundUser;
        dispatch(userLogin(foundUser));
        toast.success("Login Successfully");
        navigate(`/${role}-dashboard`);
        console.log("found User",foundUser)
    } else {
        toast.error("Invalid credentials");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;