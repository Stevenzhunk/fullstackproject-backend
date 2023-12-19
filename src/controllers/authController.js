const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const model = require('../models/User');

const getLogin = (req, res) => {
  res.render('login', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
  });
};

const createLogin = async (req, res) => {
  //console.log(JSON.stringify(req.body));
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.render('login', {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const user = await model.findOne({
      where: {
        email: req.body.email,
      },
    });
    //console.log(`el req.bodypassword es`, req.body.password);
   // console.log(`el user.password es`, user.password);
    const bcrcmpr = await bcryptjs.compare(req.body.password, user.password);
   // console.log(`la comparacion es:`, bcrcmpr);
    if (!user) {
      res.render('login', {
        values: req.body,
        errors: [{ msg: 'El correo es incorrectos (email)' }],
      });
    } else if (!bcrcmpr) {
      res.render('login', {
        values: req.body,
        errors: [
          { msg: 'El correo y/o contraseña son incorrectos (password)' },
        ],
      });
    } else {
      req.session.userId = user.id;
      res.send(
        '<html><body><h1>Login Exitoso, reedirigiendo a home en 3 segundos</h1><script>setTimeout(function() { window.location.href = "/home"; }, 3000);</script></body></html>'
      );
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const getRegister = (req, res) => {
  res.render('register', {
    layout: path.join(__dirname, '../views/layouts/layoutAdmin'),
  });
};

const createRegister = async (req, res) => {
 // console.log(req.body);
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.render('register', {
      values: req.body,
      errors: errors.array(),
    });
  }

  try {
    const user = await model.create(req.body);
    console.log(user);
    res.send(
      '<html><body><h1>Registro Exitoso, reedirigiendo a home en 3 segundos</h1><script>setTimeout(function() { window.location.href = "/home"; }, 3000);</script></body></html>'
    );
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

const logout = (req, res) => {
  console.log('usuario ha sido deslogeado');
  req.session = null;
  res.redirect('/home');
};

module.exports = { getLogin, createLogin, getRegister, createRegister, logout };
