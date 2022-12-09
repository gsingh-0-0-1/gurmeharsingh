const express = require('express')
var fs = require('fs');
const {URLSearchParams} = require('url')

const app = express()
const port = 80
const host = '0.0.0.0'

app.use(express.static('public'));

app.get("/", (req, res) => {
	res.sendFile("public/templates/poetry.html", {root: __dirname})
})

/*
app.get("/poetry", (req, res) => {
	res.sendFile("public/templates/poetry.html", {root: __dirname})
})
*/
app.listen(process.env.PORT || port, host)