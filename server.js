require("dotenv").config();
var express = require('express');
const path = require('path');
const nodemailer = require("nodemailer");
const cors = require("cors"); 

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/english", (req, res) => {
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
        subject: subject,
        text: `E-mail do Remetente: ${email}\n${message}`
    };

    const result = await transporter.sendMail(mailOptions).catch(err => err);

    try {
        await transporter.sendMail(mailOptions);
        console.log("Mensagem enviada com sucesso!");
        res.json({ success: true, message: "E-mail enviado com sucesso!", title: "Sucesso!" });
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        res.json({ success: false, message: "Erro ao enviar e-mail. Tente novamente.", title: "Erro!" });
    }
});


app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
