import express from 'express'
import chalk from 'chalk'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import createDebug from 'debug'
const debug = createDebug('app')

// const express = require('express'); // import express
// const chalk = require('chalk') // import chalk ที่ติดตั้งมา เวลาเรียกใช้งาน ใช้ใน console.log
// const debug = require('debug')('app');
// const morgan = require('morgan')
// const path = require('path')

const app = express() // เรียกใช้งาน express
const port = 3000 // กำหนด port

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "/public/")))

app.get("/", (req, res) => {
    res.send("Hello Yuyu!")
})

app.listen(port, () => {
    // console.log("Listening on port " + chalk.green(port))
    debug("Listening on port " + chalk.green(port))
})