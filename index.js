const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, () => {
    console.log("serveur started...");
});

app.use(express.static('./public'));