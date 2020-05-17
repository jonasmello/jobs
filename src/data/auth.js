const tokenExample = 'CJpYXQiOjE1ODc1NjE3MzJ9';

const checkLogin = (login, password) => {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve(login === 'admin' && password === 'admin' ? tokenExample : false);
    }, 500);
  });
};

export default class Auth {
  login = async (login, password) => {
    const token = await checkLogin(login, password);
    if (token) {
      localStorage.setItem('app-token', token);
      return true;
    }
    return false;
  };
  logout() {
    localStorage.removeItem('app-token', tokenExample);
  }
  isLogged() {
    return localStorage.getItem('app-token') === tokenExample;
  }
}
