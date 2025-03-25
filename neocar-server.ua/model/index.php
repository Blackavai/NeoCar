<?php
    // error_reporting(E_ALL);
    // ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once("../dbconnect.php");

    $method = $_SERVER['REQUEST_METHOD'];
    switch($method)
    {
        case "GET":
            $mysql = "SELECT * FROM avto";
            $result = $dbcon -> query($mysql);
            $models = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode($models);
            
            break;
    }
?>