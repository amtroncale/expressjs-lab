const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.get('/emails', (req, res) => {
    fs.readFile(path.join(__dirname, './data/emails.json'), (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).json({ msg: 'Status 500: Internal Server Error - HTTP'});
        }
        const emails = JSON.parse(data);
        res.json(emails);
    });
});

app.post('/formsubmissions', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Thank you for submitting your contact form.')
});

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// });

app.use(express.static('public'));

app.listen(3000, (err) => {
    if (err) console.log(err);
    console.log('Server running on port 3000')
});