const express = require("express");
const app = express();
const path = require("path");

app.get("/", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "index.html"));
    } catch (err) {
        console.log(err);
        res.sendFile(path.join(__dirname, "error.html"));
    }
});

app.get("/about", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "about.html"));
    } catch (err) {
        console.log(err);
        res.sendFile(path.join(__dirname, "error.html"));
    }
});

app.get("/contact-me", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, "contactMe.html"));
    } catch (err) {
        console.log(err);
        res.sendFile(path.join(__dirname, "error.html"));
    }
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "error.html"));
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
