const express = require('express');
const router = express.Router();
const db = require('../config/db.config');
const Gig = require('../models/Gig.model');


//get gig list
router.get('/', (req, res) => 
    Gig.findAll()
        .then(gigs => {
            
            res.render('gigs', {
                gigs
            });
        })

        .catch(err => console.log(err)));


//Display add gig form
router.get('/add', (req, res) => res.render('add'));


// Add a gig
router.post('/add', (req, res) => {
    const data = {
        title: 'Looking for a Nodejs developer',
        technologies: 'react, javascript, html , css',
        budget: '$7000',
        description: 'lorem ipum dolor sit amen',
        contact_email: 'user2@gmale.com'
    }

    let {title , technologies, budget, description, contact_email} = data;
    // Insert into a table
    Gig.create({
        title,
        technologies,
        description,
        budget,
        contact_email
    })

    .then(gig => res.redirect('/gigs'))
    .catch(err => console.log(err));
});

module.exports= router