const index = (req, res) => {
  res.render('index');
};

const mainContact = (req, res) => {
  res.render('contact');
};

const mainAbout = (req, res) => {
  res.render('about');
};

const mainFaqs = (req, res) => {
  res.render('faqs');
};

module.exports = {
  index,
  mainAbout,
  mainContact,
  mainFaqs,
};
