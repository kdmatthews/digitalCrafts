# how to do a fullstack app

## server

-First goal: get server listening on a port
    --require all the tools you need
    --define your port
    --make your port listen
    -- Test it in the console

-Second goal: plan out CRUD for your routes
    -- C/ Create or INSERT something into your db
    -- R/ Read or SELECT all from your db
    -- U/ Update or UPDATE INTO your db
    -- D/ delete or DELETE into your db

## database
- First goal: make your database
    -- CREATE DATABASE databasename - in your psql terminal
    -- `\l` to show if your database was created. ALWAYS check
    -- Connect to your databse you just created using 
    - `\c` name of database

- Second goal: make your table with it's schema
    -- Create your table name and columns using 
```
CREATE TABLE table_name {

}
```
    -- Verify the table was created properly

-Third goal: Connect your database with your server
    -- You just need to get one route working. Just get read working or (`SELECT *`)
    -- After you have first route written test it. Use postman
## client
- First goal: make a template for your front end
    -- input
    -- submit
    -- client side js functions
