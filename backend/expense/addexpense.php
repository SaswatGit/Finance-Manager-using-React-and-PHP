<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods");

try {
    if($_SERVER["REQUEST_METHOD"] == "POST" ){
        $data = json_decode(file_get_contents("php://input"), true);
        include '../config/db.php';
        
        $amount = $data["amount"];
        $category = $data["category"];
        $date = $data["date"];
        
        $query = $conn->prepare("INSERT INTO `expense` (`expense_amount`, `expense_category`, `expense_date`, `created_at`) VALUES (?, ?, ?, NOW())");
        $query->bindParam(1, $amount, PDO::PARAM_STR);
        $query->bindParam(2, $category, PDO::PARAM_STR);
        $query->bindParam(3, $date, PDO::PARAM_STR);
        
        if($query->execute()){
            echo json_encode(array("message" => "Expense added successfully", "status" => true));
        }else{
            echo json_encode(array("message" => "Failed to add expense", "status" => false));
        }
    }
} catch (exception $e) {
    echo json_encode(array("message" => "Something Went Wrong!", "status" => false));
}

?>