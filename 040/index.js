const express = require('express');
const fs = require('fs'); // failų sistemos modulis
const app = express();
const port = 80;

app.use(express.static('public'));

// Dalis Router
app.get('/', (req, res) => {
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const home = fs.readFileSync('./html/home.html', 'utf8');

  const pageTitle = 'Home Page';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + home + bottom);
});

app.get('/services', (req, res) => {

  // skaitome tris atskirus failus. Toks skaitymas galimas tik backend'e
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const services = fs.readFileSync('./html/services.html', 'utf8');

  const pageTitle = 'Services Page';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + services + bottom); // jau vienas HTML failas

});

app.get('/about', (req, res) => {

  // skaitome tris atskirus failus. Toks skaitymas galimas tik backend'e
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const services = fs.readFileSync('./html/about.html', 'utf8');

  const pageTitle = 'About Page';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + services + bottom); // jau vienas HTML failas

});

app.get('/contact', (req, res) => {

  // skaitome tris atskirus failus. Toks skaitymas galimas tik backend'e
  const top = fs.readFileSync('./html/top.html', 'utf8');
  const bottom = fs.readFileSync('./html/bottom.html', 'utf8');
  const contact = fs.readFileSync('./html/contact.html', 'utf8');

  const pageTitle = 'Contacts Page';
  const topWithTitle = top.replace('{{title}}', pageTitle);

  res.send(topWithTitle + contact + bottom); // jau vienas HTML failas

});


// Paleidžia serverį ir parašo terminale, kad viskas yra gerai.
app.listen(port, () => {
  console.log(`Viskas gerai. Bebras dirba ant ${port} porto`);
});