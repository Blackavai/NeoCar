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
            $mysql = "SELECT * FROM avtotovari JOIN tip_tovara ON avtotovari.id_tip_avtotovara = tip_tovara.id_tip_tov";
            $result = $dbcon -> query($mysql);
            $tovars = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode($tovars);
            
            break;
    }
?>