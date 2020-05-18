import React from 'react';
import { withRouter } from 'react-router';

import { FaAngleLeft, FaSignOutAlt } from 'react-icons/fa';
import Auth from '../data/auth';
import { Link } from 'react-router-dom';

function Header({ history, location }) {
  const { pathname } = location;
  const handleLogout = (e) => {
    e.preventDefault();
    const auth = new Auth();
    auth.logout();
    history.push('/login');
  };

  return (
    <header className="page-header">
      <Link to="/logout" className="header-link" onClick={handleLogout}>
        Logout <FaSignOutAlt />
      </Link>
      {pathname !== '/' ? (
        <Link to="/" className="header-link">
          <FaAngleLeft /> Voltar para a lista
        </Link>
      ) : (
        ''
      )}
    </header>
  );
}

export default withRouter(Header);
