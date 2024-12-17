<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods");

try {
    if($_SERVER["REQUEST_METHOD"] == "POST" ){
        $data = json_decode(file_get_contents("php://input"), true);
        include '../config/db.php';
        
        $email = $data["email"];
        $password = $data["password"];
        
        $query = $conn->prepare("SELECT * FROM `user` WHERE `user_email` = ?");
        $query->bindParam(1, $email, PDO::PARAM_STR);
        if($query->execute()){
            $user = $query->fetch(PDO::FETCH_ASSOC);
            if($user){
                if(password_verify($password, $user["user_password"])){
                    echo json_encode(array("user_id" => $user["user_id"],"message" => "Logged in Successfully", "status" => true));   
                }else{
                    echo json_encode(array("message" => "Wrong Username or Password", "status" => false));    
                }
            }else{
                echo json_encode(array("message" => "Wrong Username or Password", "status" => false));    
            }
        }else{
            echo json_encode(array("message" => "Wrong Username or Password", "status" => false));    
        }  
    }
} catch (exception $e) {
    echo json_encode(array("message" => "Something Went Wrong!", "status" => false));
}

?>