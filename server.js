const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/bookDB');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));