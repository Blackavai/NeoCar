<?php
    // error_reporting(E_ALL);
    // ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once("../dbconnect.php");

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method)
    {
        case "POST":
            $user_log = json_decode(file_get_contents('php://input'));
            $name_log = $user_log->email_log;
            $mysql = "SELECT * FROM users WHERE Name = '$name_log'";
            $result = $dbcon -> query($mysql);
            $user_inf = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode($user_inf);
        break;
    }
?>