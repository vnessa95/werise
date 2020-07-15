const request = require('request');
const express = require('express');
const search = require('./public/lookup.js')
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const html = require('html')
var addy;
//port 

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());


// add css and images
app.use(express.static('public'))



// routing
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/greennewdeal.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/greennewdeal.html'));
});
app.get('/donate.html', function(req, res) {

    res.sendFile(path.join(__dirname + '/donate.html'));
});

app.get('/contact.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/contact.html'));
});

app.get('/carbonfootprint.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/carbonfootprint.html'));
});

app.get('/political.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/political.html'));
});



// port and server setup
const port = process.env.PORT || 2z640;
app.listen(port, () => {

    console.log(`this server is running on ${port}`)
})


// api


app.get('/representatives.html',(req, res) => {

    
    res.json()
})


//submit button post request 
app.post('/representatives',(req, res) => {
    let addy = req.body;
   //api query
    const api_url= `https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyDOveHFIk2BsWevyQ4J6IO9b696e7iT59E&address=${req.body.adress}}`
//api call
request(api_url, { json: true}, function(err, response,body){
    if(err){
        
        console.log(body);
    }
    else{
    //api results
        let data =(body)
        console.log(body);
        res.render('rep', {data: data, delimiter: '?'});
    }

})
})


// rep  page 
app.get('/rep', function(req, res) {
    res.render('rep');
   
});