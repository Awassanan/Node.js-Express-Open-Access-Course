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
const PORT = process.env.PORT || 4000; // กำหนด port

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views","./src/views");
app.set("view engine","ejs")

app.get("/", (req, res) => {
    // res.send("Hello Yuyu1111!")
    res.render("index", {username: 'Miab', customers:['Kitti111','Kittikorn','Kitty']});
})

app.listen(PORT, () => {
    // console.log("Listening on port " + chalk.green(port))
    debug("Listening on port" + chalk.green(" :",PORT))
})