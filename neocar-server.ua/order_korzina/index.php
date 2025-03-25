<?php
// error_reporting(E_ALL);
// ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

require_once("../dbconnect.php");

$method = $_SERVER['REQUEST_METHOD'];
switch ($method) {
    case "POST":
        $postData = json_decode(file_get_contents('php://input'), true);

        $selectedTovarIds = $postData['selectedTovarIds'];
        $selectedAvtosalonId = $postData['selectedAvtosalonId'];

        // Дальнейшая обработка данных или сохранение в базу данных

        // Пример: вывод значений для проверки
        echo "Selected Tovar IDs: " . implode(", ", $selectedTovarIds) . "\n";
        echo "Selected Avtosalon ID: " . $selectedAvtosalonId . "\n";

        break;
}
?>
