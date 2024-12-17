<?php

header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods");

try {
    include '../config/db.php';
    
    $query = $conn->prepare("SELECT * FROM `income` ORDER BY `income_date`");
    $query->execute();
    
    $income = $query->fetchAll(PDO::FETCH_ASSOC);
    
    echo json_encode($income);
} catch (exception $e) {
    echo json_encode(array("message" => "Something Went Wrong!", "status" => false));
}

?>