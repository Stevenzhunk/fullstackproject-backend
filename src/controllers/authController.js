const getLogin = (req, res) => {
  res.render('login', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
  });
};

const createLogin = (req, res) => {
  res.send('<h1>Soy el post del Login Auth</h1>');
};

const getRegister = (req, res) => {
  res.render('register', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
  });
};

const createRegister = (req, res) => {
  res.send('<h1>Soy el post de Register Auth</h1>');
};

const logout = (req, res) => {
  res.send('<h1>Soy el Logout Auth</h1>');
};

module.exports = { getLogin, createLogin, getRegister, createRegister, logout };
