<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once("../../dbconnect.php");

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
  case "POST":
    $mysql = "SELECT * FROM `test_drive` JOIN avto ON test_drive.id_avto = avto.id JOIN avtosalon ON test_drive.id_salona = avtosalon.id";
    $result = $dbcon->query($mysql);
    $test = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($test);
    break;
}
?>

