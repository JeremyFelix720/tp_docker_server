console.log('Hello world');

import express from "express"
import "dotenv/config"
import cors from "cors"
import fs from "fs-extra";

const app = express()
app.use(cors())


// const port = parseInt(process.env.PORT as string)

const port = 3032


import { DataTypes, Sequelize } from "sequelize"

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite",
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/toto/', (req, res) => {
    res.send('Toto')
  })

app.get('/server/time', (req, res) => {
  let date = new Date();
  let timestamp = date.getTime()
  res.send("Depuis le 1er janvier 1970, il s'est écoulé : " + timestamp + " secondes. Et la date qui en découle est : " + date)
})

app.get('/hello/:name', (req, res) => {
  let name = req.params.name
  res.send("Bonjour " + name)
  //console.log("Bonjour " + name)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})