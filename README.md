# Defenders of the Forest

## How to setup the game

### Requirements

- Install XAMPP to setup the server and database.
- Once XAMPP is installed, start the Apache and MySQL services.

### Setup the database

- Go to `http://localhost/phpmyadmin/`
- Create a new database named `defense` or import the `setup.sql` from the `database` folder.

### Setup the server and database variables

- Copy the project folder to the `htdocs` folder in the XAMPP installation directory.
- Open the `login.php`.
- Update the following database connection variables with your database credentials.

  - $servername
  - $username_db
  - $password_db

- if you changed the database name:
- Update the following database connection variable with your database name.
  - $database

### Run the game

- Open the browser and go to `http://localhost/path_to_folder/` to start the game.
- Register a new account or use the following credentials to login:

  - Username: `admin`
  - Password: `admin`

- Enjoy the game!
