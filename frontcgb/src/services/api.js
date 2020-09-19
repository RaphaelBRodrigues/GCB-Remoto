const axios = require("axios");

const api = axios.create({
    baseURL:"http://raphaelgcb-dev.umbler.net/",
    headers: {'Access-Control-Allow-Origin': "*"}
});


export { api };