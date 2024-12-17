<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods");

try {
    if($_SERVER["REQUEST_METHOD"] == "POST" ){
        $data = json_decode(file_get_contents("php://input"), true);
        include '../config/db.php';
        
        $name = $data["name"];
        $email = $data["email"];
        $password = $data["password"];
        $cpassword = $data["confirmPassword"];

        if($password != $cpassword){
            echo json_encode(array("message" => "Password and Conform Password doesn't match", "status" => false));
            exit();
        }

        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        $query = $conn->prepare("INSERT INTO `user` (`user_name`, `user_email`, `user_password`, `created_at`) VALUES (?, ?, ?, NOW())");
        $query->bindParam(1, $name, PDO::PARAM_STR);
        $query->bindParam(2, $email, PDO::PARAM_STR);
        $query->bindParam(3, $hashed_password, PDO::PARAM_STR);
        if($query->execute()){
            echo json_encode(array("message" => "Registered Successfully",  "status" => true)); 
                exit(); 
        }else{
            echo json_encode(array("message" => "Failed to register", "status" => false));   
            exit(); 
        }  
    }
} catch (exception $e) {
    echo json_encode(array("message" => "Something Went Wrong!", "status" => false));
    exit();
}



?>