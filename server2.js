const express = require("express");
const app = express();

app.use( require("./route") );

app.listen("4000", "0.0.0.0", () => {
    console.log("Estas en linea");
});