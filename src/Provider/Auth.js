var _token = "";
var _isLoggedInStat = false;

const login = (token) => {
  _token = token;
  _isLoggedInStat = true;
  localStorage.removeItem("REACT_TOKEN_AUTH_PMS");
  localStorage.setItem("REACT_TOKEN_AUTH_PMS", token);
  return;
};
const logout = () => {
  localStorage.removeItem("REACT_TOKEN_AUTH_PMS");
  _isLoggedInStat = false;
  _token = "";
};

const isLoggedIn = () => {
  if (_isLoggedInStat === false) {
    if (localStorage.getItem("REACT_TOKEN_AUTH_PMS") != null) {
      _token = localStorage.getItem("REACT_TOKEN_AUTH_PMS");
      _isLoggedInStat = true;
    }
  }
  return _isLoggedInStat;
};

const getToken = () => {
  return _token;
};

export { login, logout, isLoggedIn, getToken };
