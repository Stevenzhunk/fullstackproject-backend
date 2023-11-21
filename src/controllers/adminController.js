/*ATENCION!!!
 para llamar al layout del admin en estas vistas hay que usar el path del adminCreate (linea 13 de este codigo)
  app.get('/', function(req, res) {
  res.render('the-view', { layout: 'specific-layout' });
});
*/ 
const path = require('path');
const adminHome = (req, res) => {
  res.send("<h1>Soy el panel Admin</h1>");
};

const adminCreate = (req, res) => {
  res.render('create',{ layout: path.join(__dirname, '../views/layouts/layoutAdmin')});
};

const adminCreatePost = (req, res) => {
  res.send("<h1>Soy el post de la Creacion del Admin</h1>");
};

const adminEditGet = (req, res) => {
  const { id } = req.params;
  //como mando el parametro del item a editar 
  res.render('edit',{ layout: path.join(__dirname, '../views/layouts/layoutAdmin')});
};

const adminEditPut = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>soy la Actualizacion Nro: ${id} del Admin</h1>`);
};

const adminDelete = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el Item Nro: ${id} Borrado por el Admin</h1>`);
};

module.exports = {
  adminHome,
  adminCreate,
  adminCreatePost,
  adminEditGet,
  adminEditPut,
  adminDelete,
};
