const express = require('express');
const { data } = require('./Mock_Data/Data1');
const MOCK_DATA = require('./Mock_Data/Data2.json');
const {NewsData} = require('./Mock_Data/Data3');
const app = express();
const PORT = 3001;

app.get("/getData", (req, res) => {
    res.status(200).json({
        data: data
    });
});

app.get("/getNewsData", (req, res) => {
    res.status(201).json({
        data: NewsData
    });
});

app.get("/me", (req, res) => {
    res.status(201).json(MOCK_DATA)
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
});