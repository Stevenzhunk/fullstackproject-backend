const index = (req,res) => {
    res.render('index');
};

const mainContact = (req, res) => {
    res.send("<h1>Pagina Contacto</h1>");
  };

const mainAbout = (req, res) => {
    res.send("<h1>Pagina Acerca de Nosotros</h1>");
  };
  
const mainFaqs = (req, res) => {
    res.send("<h1>Pagina Faqs</h1>");
  };
  

module.exports= {
    index,
    mainAbout,
    mainContact,
    mainFaqs
};