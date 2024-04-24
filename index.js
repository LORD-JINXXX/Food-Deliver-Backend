require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());
const cors = require("cors");


const corsConfig = {
    credentials: true,
    origin: true,
};

//middlewares
app.use(cors(corsConfig));


//Routers
const calculateDeliveryCost = require('./routes/calculateDeliveryCost');

//Route
app.use("/api/calculateDeliveryCost", calculateDeliveryCost);



const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server running on ${port}`)
});