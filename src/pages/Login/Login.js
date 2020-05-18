import React, { useState, useEffect } from 'react';
import { FaUser } from 'react-icons/fa';

import Auth from '../../data/auth';
import FormField from '../../components/FormField/FormField';

function Login({ history }) {
  const auth = new Auth();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [formFeedback, setFormFeedback] = useState('Digite seu usuário e senha para acessar a aplicação');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (login === '' || password === '') {
      setFormFeedback('Por favor, preencha todos os campos');
      return false;
    }
    const result = await auth.login(login, password);
    if (result) {
      history.push('/');
      return true;
    }
    setFormFeedback('Usuário ou senha incorretos');
    return false;
  };

  useEffect(() => {
    auth.logout();
  }, [auth]);
  return (
    <div className="page login">
      <div className="container">
        <div className="top-icon">
          <FaUser />
        </div>
        <h1 className="h1">Login</h1>
        <p className="body-text form-feedback">{formFeedback}:</p>
        <form action="" method="post" onSubmit={handleSubmit}>
          <div>
            <FormField placeholder="Usuário" type="text" name="login" value={login} setState={setLogin} />
          </div>
          <div>
            <FormField placeholder="Senha" type="password" name="password" value={password} setState={setPassword} />
          </div>
          <div>
            <button className="form-button" type="submit">
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
