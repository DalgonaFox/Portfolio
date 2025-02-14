// Extensões
var express = require('express');
var session = require('express-session');
var app = express();
const multer = require('multer');
const fs = require('fs');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require("nodemailer");

const port = 8080;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'portfolio'
});

db.connect((error) => {
    if (error) {
        console.error('Erro ao conectar ao MySQL:', error);
    } else {
        console.log("Conectado ao MySQL!");
    }
});

app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});

// Pasta public
app.use(express.static(__dirname + '/public'));

// Pasta views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/projetos', (req, res) => {
    res.render('pages/projetos')
});