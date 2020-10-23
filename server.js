const express = require('express');
const app = express();
const connectDB = require('./config/db');
const auth = require('./middleware/auth');

// CONNECT TO DB
connectDB();

// INIT JSON MIDDLEWARE
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('connected');
});
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/adverts', require('./routes/api/adverts'));
//app.use('/api/adverts/', require('./routes/api/adverts'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
