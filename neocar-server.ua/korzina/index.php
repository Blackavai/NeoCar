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
            $postData = json_decode(file_get_contents('php://input'), true);

            $userId = $postData['userId'];
            $tovarId = $postData['tovarId'];

            echo $mysql = "INSERT INTO korzina (`id_user`, `id_avtotovara`) VALUES ('$userId', '$tovarId')";
            $result = $dbcon -> query($mysql);

            break;
        
        case "GET":
            $mysql = "SELECT * FROM korzina JOIN avtotovari ON korzina.id_avtotovara = avtotovari.id";
            $result = $dbcon -> query($mysql);
            $tovar_korz = $result -> fetch_all(MYSQLI_ASSOC);
            echo json_encode($tovar_korz);

            break;
    }

?>