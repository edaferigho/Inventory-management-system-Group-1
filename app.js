require('dotenv').config()
const express = require('express');
const userRoute = require('./Route/userRoute')
const productRoute = require('./Route/productRoute')



const app = express();



app.use('/',userRoute)
app.use('/products',productRoute)
PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running at 127.0.0.1:${PORT}`);
})
