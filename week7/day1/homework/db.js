const Pool = require('pg').Pool;

const creds= new Pool({
    host:"localhost",
    port: 5432,
    database:"kayladb",
    user: "",
    password: "",

});

module.exports = creds;