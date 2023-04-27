import img from '../assets/animate.gif';
import { Link, NavLink, useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/AuthTypes';

const LoginScreen = () => {
  const history = useHistory();

  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    dispatch({ type: authTypes.login });
    history.push('/mens');
  };

  return (
    <div className='container mt-5 text-center'>
      <img src={img} alt='animacion' />
      <h1 className='my-3'>Login Screen</h1>
      <button onClick={handleLogin} className='btn btn-primary'>
        Login
      </button>
    </div>
  );
};

export default LoginScreen;
