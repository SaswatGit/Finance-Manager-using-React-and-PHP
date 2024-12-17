<?php

$host = "mysql:host=localhost;dbname=fimanager";
$username = "root";
$password = "";

$conn = new PDO($host, $username, $password);
if(!$conn){
    die("Failed to connect to Database!");
}

?>