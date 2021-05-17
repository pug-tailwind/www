const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const PORT  = process.env.PORT || 3000;

const app = express();
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('assets'));
app.use(compression());

app.get('/', (req, res) => {
  res.render('index', { active: '/', title: 'Pug Tailwind' });
});

app.get('/navbars', (req, res) => {
  res.render('navbars', { active: '/navbars', title: 'Navbars - Pug Tailwind' });
});

app.get('/tables', (req, res) => {
  res.render('tables', { active: '/tables', title: 'Tables - Pug Tailwind' });
});

app.get('/forms', (req, res) => {
  res.render('forms', { active: '/forms', title: 'Forms - Pug Tailwind'  });
});
app.get('/buttons', (req, res) => {
  res.render('buttons', { active: '/buttons', title: 'Buttons - Pug Tailwind' });
});
app.get('/badges', (req, res) => {
  res.render('badges', { active: '/badges', title: 'Badges - Pug Tailwind' });
});
app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
})

