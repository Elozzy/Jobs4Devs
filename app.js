const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const Handlebars = require('handlebars');
const path = require('path');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access');


// Database
const db = require('./config/db.config');


db.authenticate().then(() => console.log('db connected ...')).catch(err => console.log('Error: ' + err))




const app = express();

//Handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main',
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));
app.set('view engine', 'handlebars');

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => res.render('index',{layout: 'landing'}));

//Gig routes
app.use('/gigs', require('./routes/gigs.routes'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));