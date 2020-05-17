import React, { useState } from 'react';

import './style.scss';

function handleSubmit() {}

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="page login">
      <div className="container">
        <h1 className="h1">Login</h1>
        <p className="body-text">Digite seu usuário e senha para acessar a aplicação:</p>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div>
            <input placeholder="Usuário" type="text" name="login" value={login} onChange={(e) => setLogin(e.target.value)} />
          </div>
          <div>
            <input
              placeholder="Senha"
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button type="submit">Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
