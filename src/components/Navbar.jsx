import { React, useContext } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { authTypes } from '../types/AuthTypes';

const Navbar = () => {
  const history = useHistory();

  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    dispatch({ type: authTypes.logout });
    history.replace('/login');
  };

  return (
    <>
      <nav className='navbar navbar-expand-lg bg-body-tertiary'>
        <div className='container-fluid'>
          <a className='navbar-brand mb-1' href='/login'>
            DB APP
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNav'
            aria-controls='navbarNav'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <NavLink
                  activeClassName='active text-primary'
                  className='nav-link'
                  aria-current='page'
                  to='/mens'
                >
                  Mens
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  activeClassName='active text-primary'
                  className='nav-link'
                  to='/womens'
                >
                  Womens
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  activeClassName='active text-primary'
                  className='nav-link'
                  to='/search'
                >
                  Search
                </NavLink>
              </li>
            </ul>
            <div className='d-flex ms-auto'>
              <button className='btn btn-danger' onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
