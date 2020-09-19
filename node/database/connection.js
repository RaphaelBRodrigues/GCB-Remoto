const Knex = require("knex");


const connection = new Knex({
    client:"mysql2",
    connection:{
        host : '127.0.0.1',
        user : 'root',
        password : 'root',
        database : 'GCB'
    }
});

module.exports = connection;