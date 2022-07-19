const express = require('express');
const router = express.Router();

const messages = [
   {
     text: "Hi there!",
     user: "Amando",
     added: new Date()
   },
   {
     text: "Hello World!",
     user: "Charles",
     added: new Date()
   }
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Mini Messageboard', 
    messages
  });
});

router.get('/new', (req, res) => {
  res.render('form', { 
    title: "New message",
    heading: "New message:" 
  });
});

router.post('/new', (req, res) => {
  const text = req.body.text;
  const user = req.body.user;
  messages.push({ 
    text, 
    user,
    added: new Date() 
  });
  res.redirect('/');
});

module.exports = router;