const adminHome = (req, res) => {
  res.send("<h1>Soy el panel Admin</h1>");
};

const adminCreate = (req, res) => {
  res.send("<h1>Soy la Creacion del Admin</h1>");
};

const adminCreatePost = (req, res) => {
  res.send("<h1>Soy el post de la Creacion del Admin</h1>");
};

const adminEditGet = (req, res) => {
  const { id } = req.params;
  res.send(`<h1>Soy el Item Nro : ${id} del Admin</h1>`);
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
