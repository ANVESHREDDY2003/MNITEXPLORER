const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const User = require('./User');
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");

dotenv.config();

const JWT_SECRET = "ndkwdkwdkbdkwd";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB is successfully connected'))
    .catch((err) => console.error(err));

app.post('/register', async (req, res) => {
    const { fname, lname, email, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const olduser = await User.findOne({ email });
        if (olduser) {
            return res.json({ error: "User exists" });
        }
        await User.create({
            fname,
            lname,
            email,
            password: encryptedPassword,
        });
        res.send({ status: 'ok' });
    } catch (error) {
        res.send({ status: 'error' });
    }
});

app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.json({ error: "User not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
        const token = jwt.sign({}, JWT_SECRET);
        if (res.status(201)) {
            return res.json({ status: "ok", data: token });
        } else {
            return res.json({ error: "error" });
        }
    }
    res.json({ status: "not okay", error: "invalid password" });
});
const contactSchema = new mongoose.Schema({
    phoneNo: { type: String, required: true },
    query: { type: String, required: true },
  });
  
  const Contact = mongoose.model('Contact', contactSchema);

  app.post('/submit-query', async (req, res) => {
    const { phoneNo, query } = req.body;
    try {
      const contact = await Contact.create({ phoneNo, query });
      res.json({ message: 'Query submitted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to submit the query' });
    }
  });

app.listen(process.env.PORT, () => console.log('Server has been started successfully'));
