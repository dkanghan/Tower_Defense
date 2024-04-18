<?php
session_start();

// If user is already logged in, redirect to index page
if (isset($_SESSION["username"])) {
    header("Location: index.php");
    exit();
}

// Database connection parameters
$servername = "localhost";
$username_db = "root";
$password_db = "";
$database = "defense";

// Create and Check connection
$conn = new mysqli($servername, $username_db, $password_db, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the registration form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["register"])) {
    $new_username = $_POST["new_username"];
    $new_password = $_POST["new_password"];

    // Check if the username already exists in the database
    $check_username_sql = "SELECT * FROM users WHERE user_name = '$new_username'";
    $check_username_result = $conn->query($check_username_sql);

    if ($check_username_result->num_rows > 0) {
        echo "<script>alert('Username already exists');</script>";
    } else {
        // Insert the new user into the database
        $insert_sql = "INSERT INTO users (user_name, password) VALUES ('$new_username', '$new_password')";

        if ($conn->query($insert_sql) === TRUE) {
            // Registration successful, set session and redirect to index page
            $_SESSION["username"] = $new_username;
            header("Location: index.php");
            exit();
        }
    }
}

// Check if the login form has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["login"])) {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Validate user credentials from the database
    $sql = "SELECT * FROM users WHERE user_name = '$username' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // Login successful, set session and redirect to index page
        $_SESSION["username"] = $username;
        header("Location: index.php");
        exit();
    } else {
        // Login failed, redirect back to login page with error
        echo "<script>alert('Invalid username or password.');</script>";
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login/Register</title>
    <link rel="stylesheet" href="css/styles.css">
</head>

<body>

    <div class="container">
        <div class="tab">
            <button class="tablinks" onclick="openForm(event, 'Login')" id="defaultOpen">Login</button>
            <button class="tablinks" onclick="openForm(event, 'Register')">Register</button>
        </div>

        <div id="Login" class="tabcontent">
            <h2>Login</h2>
            <form action="login.php" method="post">
                <label for="username">Username:</label><br>
                <input type="text" id="username" name="username" required><br>
                <label for="password">Password:</label><br>
                <input type="password" id="password" name="password" required><br>
                <input type="submit" name="login" value="Login">
            </form>
        </div>

        <div id="Register" class="tabcontent">
            <h2>Register</h2>
            <form action="login.php" method="post">
                <label for="new_username">New Username:</label><br>
                <input type="text" id="new_username" name="new_username" required><br>
                <label for="new_password">New Password:</label><br>
                <input type="password" id="new_password" name="new_password" required><br>
                <input type="submit" name="register" value="Register">
            </form>
        </div>
    </div>

    <script>
        function openForm(evt, formName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(formName).style.display = "block";
            evt.currentTarget.className += " active";
        }

        document.getElementById("defaultOpen").click();
    </script>

</body>

</html>


<?php

// Close database connection
$conn->close();
?>