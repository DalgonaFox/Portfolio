require("dotenv").config();
var express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require("nodemailer");
const cors = require("cors"); 
console.log("EMAIL_HOST:", process.env.EMAIL_HOST);
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "OK" : "NÃO DEFINIDO");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index", {sendMessage: null});
});

app.get("/English", (req, res) => {
    res.render("english");
});

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
  });

  app.post("/send-email", async (req, res) => {
    const { name, email, subject, message } = req.body;

    const mailOptions = {
        from: `"${name}" <${process.env.EMAIL_USER}>`,
        replyTo: email,
        to: process.env.EMAIL_DEST,
        subject: `${subject}`,
        text: `E-mail do Remetente: ${email}\n ${message}`
    };

    if (error){
        console.error("Erro ao enviar e-mail:", error);
    } else  {
        console.log("Mensagem enviada com sucesso!");
        return res.render('index', {sendMessage: 'E-mail enviado com sucesso!' });
    }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));