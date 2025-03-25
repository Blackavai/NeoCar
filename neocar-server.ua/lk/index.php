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
            $mysql = "SELECT * FROM avto_user
            JOIN avtosalon ON avto_user.id_avtosalona = avtosalon.id
            JOIN avto ON avto_user.id_avto = avto.id";
            $result = $dbcon -> query($mysql);
            $models = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode($models);

            break;
    }
?>

