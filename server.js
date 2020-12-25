const express = require('express');
const app = express();
const connectDB = require('./config/db');
const auth = require('./middleware/auth');
const path = require('path');

// CONNECT TO DB
connectDB();

// INIT JSON MIDDLEWARE
app.use(express.json({ extended: false }));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/adverts', require('./routes/api/adverts'));
//app.use('/api/adverts/', require('./routes/api/adverts'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
