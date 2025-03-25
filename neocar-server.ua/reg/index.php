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
            $user_log = json_decode(file_get_contents('php://input'));
            echo $name_log = $user_log->email_log;
            echo $pass_log = $user_log->pass_log;
            echo $mysql = "SELECT * FROM users WHERE (Name = '.$name_log.');";
            $result = $dbcon -> query($mysql);
            if(!$result)
            {
                echo 'Ошибка выполнения запроса'.$dbcon->error;
            }
            break;
        
        case "POST":
            $user = json_decode(file_get_contents('php://input'));
            echo $name_log = $user->email_log;
            echo $pass_log = $user->pass_log;
            $name = $user->name_reg;
            $fam = $user->fam_reg;
            $tel = $user->number_reg;
            $email = $user->email_reg;
            $pass = $user->pass_reg;
            $rep_pass = $user->rep_pass_reg;
            echo $mysql = "INSERT INTO users(`password`, `Name`, `Fam`, `tel`, `email`) VALUES ('$pass', '$name', '$fam', '$tel', '$email')";
            $result = $dbcon -> query($mysql);
            if($result)
            {
                $response = ['status' => 1, 'message' => 'Вы успешно зарегистрировались!'];
            }
            else
            {
                $response = ['status' => 0, 'message' => 'Ошибка'];
            }
            if(!$result)
            {
                echo 'Ошибка выполнения запроса'.$dbcon->error;
            }	
            echo json_encode($response);
        break;
    }
?>