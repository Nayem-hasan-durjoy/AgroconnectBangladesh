<?php
$servername = "localhost"; // Change if using a remote database
$username = "root"; // Replace with your database username
$password = ""; // Replace with your database password
$database = "agroconnect"; // Replace with your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

// Uncomment below line to confirm connection is successful
// echo "Connected successfully";
?>
