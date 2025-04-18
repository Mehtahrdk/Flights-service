This is a boiler plate nodejs template that anyone can use  this is formed using all the best coding principles which are a standard to the industry.

This template is a good starting point for any project. It includes a lot of useful features and tools.

`src`-> This is the folder that contains all the contents regarding the source code, this does not include any kinds of tests.

lets take a look inside the `src` folder

`config`-> this folder contains all the libraries and configurations of a setup will be done. for example 'dotenv' which helps us define environment variables anywhere in a cleaner manner. This is done in the 'server-config.js' file . one more example can be to setup your logging library that can help you prepare meaninigful logs, so configuration for this library should also be done here.

`routes`-> in the routes folder, we register a route and a corresponding middleware and cotrollers to it.

`middlewares`-> they are just going to intercept the  incoming requests where we can write our validators,authenticators etc.

`controllers`-> they are kind of the last middlewares as post them you call your business layer to execute the business logic. In controllers we just recieve the incoming requests and data and then pass it to the business layer,and once business layer returns an output,we structure the API response in controllers and send the output.

`repositories`->this folder contains all the logic using which we interact with DB by writing queries , all the raw queries or ORM queries will go here.

`services`->contains the business logic and interacts with the repositories for data from the database.

`utils`->contains helper methods, error classes etc.

### setup the project 

-download this template from github and open it in your favourite text editor.
-in the root directory create a `.env` file and add the following  env variables.

```
     PORT<port number of your choice>
```
ex: port=3000

-inside `src/config` folder create a file named as config.json and write the following code

{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
- if you are setting your development environment, then write the username of your db, password of your db and in dialect mention whatever db you are using ex- mariadb
- if you are setting your production environment, then make sure you also replace the host with the hosted db url.










