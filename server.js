const express = require('express');
const app = express()


app.get('/download', function (req, res) {
    return res.download(`${__dirname}/public/ejemplo.js`);
});

app.listen(8080)