const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("serveur started...");
});

app.get('/', (req, res) => {
    console.log('access to / path');
    res.send(`
    <!Doctype html>
    <html>
        <head>
            <title>Projet_2</title>
        </head>
        <body>
            <h1>'hola amigos !</h1>
            </body>
        </html>
        `);
});

app.get("/about", (req, res) => {
    res.send("about");
});