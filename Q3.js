const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, telephone } = req.body;
    const phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    if (phonePattern.test(telephone)) {
        res.send(`<p>${name}, your telephone number ${telephone} is in the correct format.</p>`);
    } else {
        res.send(`${name}, your telephone number ${telephone} is not in the correct format.</p>`);
    }
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
