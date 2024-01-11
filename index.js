const express = require('express');
const { data } = require('./Mock_Data/Data1');
const MOCK_DATA = require('./Mock_Data/Data2.json');
const app = express();
const PORT = 3001;

app.get("/getData", (req, res) => {
    res.status(200).json({
        data: data
    });
});

app.get("/me", (req, res) => {
    res.status(201).json(MOCK_DATA)
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});