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
            $mysql = "SELECT * FROM avtosalon";
            $result = $dbcon -> query($mysql);
            $salons = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode($salons);
            
            break;
    }
?>