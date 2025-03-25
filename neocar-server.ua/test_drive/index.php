<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Content-Type: application/json");

    require_once("../dbconnect.php");

    $method = $_SERVER['REQUEST_METHOD'];

    switch($method)
    {
        case "POST":
            $test_log = json_decode(file_get_contents('php://input'), true);

            $name_test = $test_log['name_test'];
            $fam_test = $test_log['fam_test'];
            $email_test = $test_log['email_test'];
            $tel_test = $test_log['tel_test'];
            $avtosalon_test = $test_log['avtosalon_test'];
            $date = date("Y-m-d");

            $mysql = "INSERT INTO test_drive(`name_test`, `fam_test`, `tel_test`, `email_test`, `id_avto`, `id_salona`, `data_test`) VALUES ('$name_test', '$fam_test', '$tel_test', '$email_test', 1, '$avtosalon_test', '$date')";
            $result = $dbcon->query($mysql);

            if ($result)
            {
                $response = "Успешно"; // Пример сообщения об успешной отправке
            }
            else
            {
                $response = "Неудачно"; // Пример сообщения об успешной отправке
            }

            if (!$result)
            {
                echo 'Ошибка выполнения запроса' . $dbcon->error;
            }	

            echo json_encode(array('message' => $response));

            break;
    }
?>
