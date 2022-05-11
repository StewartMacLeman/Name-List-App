const path = require('path');
const express = require('express');
const app = express();
const nameRoutes = require('./routes/nameRoutes')

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use('/', nameRoutes);

// app.listen(3000, () => console.log("The app is running on port 3000."));
app.listen(5000, () => console.log("The app is running on port 5000."));