const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to the Beautiful Site' });
});

// Show the contact form
app.get('/contact', (req, res) => {
  res.render('contact');
});

// Handle the submitted form
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Form submitted:', { name, email, message });
  res.render('thankyou', { name, email, message });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

const todos = []; // In-memory list (will reset on server restart)

app.get('/todo', (req, res) => {
  res.render('todo', { title: 'My ToDo List', todos });
});

app.post('/todo', express.urlencoded({ extended: true }), (req, res) => {
  const { task } = req.body;
  if (task.trim() !== '') {
    todos.push({ task, createdAt: new Date().toLocaleString() });
  }
  res.redirect('/todo');
});

// Export app without calling listen
module.exports = app;
