import express from 'express'
import chalk from 'chalk'
import morgan from 'morgan'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import createDebug from 'debug'
const debug = createDebug('app')

const productRouter = express.Router();

// const express = require('express'); // import express
// const chalk = require('chalk') // import chalk ที่ติดตั้งมา เวลาเรียกใช้งาน ใช้ใน console.log
// const debug = require('debug')('app');
// const morgan = require('morgan')
// const path = require('path')

const app = express() // เรียกใช้งาน express
const PORT = process.env.PORT || 4000; // กำหนด port

app.use(morgan('combined'))
app.use(express.static(path.join(__dirname, "/public/")))

app.set("views", "./src/views");
app.set("view engine", "ejs");

// productRouter.route("/").get((req, res) => {
//     // res.send("Hello World !!, I'm Product")
//     res.render("products")
// })

productRouter.route("/").get((req, res) => {
    // res.send("Hello World !!, I'm Product")
    res.render("products", {
        products: [
            { title: "ซันไลต์ถนอมมือ", description: "คลีน แอนด์ แคร์", price: 50 },
            { title: "ไลปอนเอฟมะกรูด", description: "800 มล.กลิ่นมะกรูด แพ็คคู่", price: 69 },
            { title: "ไลปอนเอฟส้ม", description: "800 มล.กลิ่นเจแปนนีส ยูซุ แพ็คคู่", price: 69 },
            { title: "ทีโพลเพียว", description: "หอม สะอาด จานวิ้ง ๆ", price: 45 },
        ]
    });
});


productRouter.route("/1").get((req, res) => {
    res.send("Hello World !!, I'm Product 1")
})


app.use("/products", productRouter)
// app.get("/products")

app.get("/", (req, res) => {
    // res.send("Hello Yuyu1111!")
    res.render("index", { username: 'Miab', customers: ['Kitti111', 'Kittikorn', 'Kitty'] });
})

app.listen(PORT, () => {
    // console.log("Listening on port " + chalk.green(port))
    debug("Listening on port" + chalk.green(" :", PORT))
})