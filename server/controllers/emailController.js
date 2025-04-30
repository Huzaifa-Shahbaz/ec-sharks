const nodemailer = require("nodemailer");
require("dotenv").config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.NODEMAILER_AUTH_USER || 'huzaifaecsharks@gmail.com',
        pass: process.env.NODEMAILER_AUTH_PASS || 'ttdy kwxx uuss mfqd',
    }
});

const handleContactForm = async (req, res) => {
    const { name, email, phone, organization, message } = req.body;
    
    let mailOptions = {
        replyTo: email,
        to: 'idl4huzaifa@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nOrganization: ${organization}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ status: 200, message: 'Email sent: ' + info.response });
    });
}

const handleQueryForm = async (req, res) => {
    const { name, email, phone, experts, technology, message } = req.body;

    let mailOptions = {
        replyTo: email,
        to: 'idl4huzaifa@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nexperts: ${experts}\ntechnology: ${technology}\nmessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ status: 200, message: 'Email sent: ' + info.response });
    });
}

module.exports = { handleContactForm, handleQueryForm }