const Pool = require('pg').Pool;

const creds= new Pool({
    host:"localhost",
    port: 5432,
    database:"todolist",
    // Import your username and password from your .env file and interpolate it here
    user: "",
    password: "",

});

module.exports = creds;