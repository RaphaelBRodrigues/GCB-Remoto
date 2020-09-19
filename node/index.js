const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const knex = require("./database/connection");


//Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Routes
app.use(routes);




app.listen(8080,()=>{
    console.log("Servidor rodando");
});