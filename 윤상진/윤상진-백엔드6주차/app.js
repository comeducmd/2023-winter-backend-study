const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const blogRoutes = require('./routes/blog.js')

const app = express();

//Template Engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(blogRoutes)

mongoose.set('strictQuery', false)
mongoose.connect('mongodb+srv://admin:joey2335@cluster0.xvppgna.mongodb.net/blog?retryWrites=true&w=majority')

    .then(() => {
        app.listen(8081, function () {
            console.log("Listening on 8081 port")
        })
    })
    .catch((err) => {
        console.log(err)
    })