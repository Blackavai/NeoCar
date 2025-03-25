<?php
    // error_reporting(E_ALL);
    // ini_set('display_errors', 1);
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");

    require_once("../../dbconnect.php");

    $method = $_SERVER['REQUEST_METHOD'];

    switch($method)
    {
        case "POST":
            $mysql = "INSERT INTO avto_user FROM `order_tov` JOIN avtotovari ON order_tov.id_avtotovar_order = avtotovari.id";
            $result = $dbcon -> query($mysql);
            $orders = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode($orders);
            break;
    }
?>

