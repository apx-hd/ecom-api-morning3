const express = require('express')
const cors = require('cors')
const productRouter = require('./routes/productRoutes')
const connectDatabase = require('./database/connection')
const PORT = 4000;

const app = express()


//Connect to database
connectDatabase()

app.use(cors())
 main
//Required to access json data in post function
app.use(express.json())

//Use routes
app.use('/api/products', productRouter)
console.log('HELLO')

app.listen(PORT, () => {
  console.log(`Server already started at port ${PORT}`);
});

console.log("Aabiskar Pandey");
