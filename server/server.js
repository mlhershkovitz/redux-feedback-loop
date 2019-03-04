const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const pool = require('./modules/pool')

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.post('/review', (req, res) => {
    console.log(req.body);
    let queryString = ('INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);')
    pool.query(queryString, [req.body.feeling, req.body.understanding, req.body.support, req.body.comments])
    .then(() => {
        res.sendStatus(201)
    }).catch((error) => {
        console.log('error in axios post', error);
        res.sendStatus(500);
    })    
})


/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});