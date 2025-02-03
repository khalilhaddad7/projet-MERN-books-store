const express = require('express')
const app = express()
const mongoose = require('mongoose');
const cors = require("cors")
const port = process.env.port || 5000
require('dotenv').config()



//middleware
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}))


// routes
const bookRoutes = require('./src/books/book.route')
app.use('/api/books',bookRoutes)


async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use('/', (req, res) => {
    res.send("book store server is running")
  })
}
main().then(()=> console.log("Mongodb connected successfuly !")).catch(err => console.log(err));

app.listen(port, () => {
  console.log(`server is running on port ${port}`)
})