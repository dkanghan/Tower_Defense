# Database

- This file contains the detail of the schema and data for the database. setup.sql file is used to create the database and tables for the game.
- The database is named `defense` and contains the `users` table for storing user information.

## Database Schema

- The database schema consists of a single table `users` with the following columns:
  - `username` (Primary Key)(varchar(255))(Not Null)
  - `password` (varchar(512))(Not Null)

## ER Diagram

  ```
    +-----------------+
    |      users      |
    +-----------------+
    | user_name (PK)  |
    | password        |
    +-----------------+
```

## Database Setup

- The database can be created by running the `setup.sql` file in the `database` directory.
- The `setup.sql` file contains the SQL commands to create the database and the `users` table.

- To setup the database:
  - Install XAMPP to setup the server and database.
  - Once XAMPP is installed, start the Apache and MySQL services.
  - Go to `http://localhost/phpmyadmin/`
  - Create a new database named `defense` or import the `setup.sql` from the `database` folder.
