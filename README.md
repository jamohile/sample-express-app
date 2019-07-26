
## This sample app
This is a barebones express server.
It can handle the following requests:

GET /zoos

POST /zoos (with JSON body with property name)


### Database
Using this backend requires a running mysql database.

1. Set up a mysql database.
2. Create a table called "Zoos" with the following columns: id (int), name (varchar(255)), and dateCreated(datetime)
3. Create a .env file in this directory with the following content:
   
```
DB_HOST=localhost
DB_USER=
DB_PASSWORD=
DB_NAME=
```

Note: Fill in the required fields.
