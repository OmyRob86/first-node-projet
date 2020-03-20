const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("serveur started...");
});

app.get('/', (req, res) => {
    console.log('access to / path');
    res.send('hola amigos !');
});

app.get("/about", (req, res) => {
    res.send("about");
});