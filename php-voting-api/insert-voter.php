<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));

//CREATE MESSAGE ARRAY AND SET EMPTY
$msg['message'] = '';

// CHECK IF RECEIVED DATA FROM THE REQUEST
if(isset($data->email) && isset($data->voted_for) ){
    // CHECK DATA VALUE IS EMPTY OR NOT
    if(!empty($data->email) && !empty($data->voted_for)){
        
        $insert_query = "INSERT INTO `voters`(email, voted_for) VALUES(:email, :voted_for)";
        
        $insert_stmt = $conn->prepare($insert_query);
        // DATA BINDING
        $insert_stmt->bindValue(':email', htmlspecialchars(strip_tags($data->email)),PDO::PARAM_STR);
        $insert_stmt->bindValue(':voted_for', htmlspecialchars(strip_tags($data->voted_for)),PDO::PARAM_STR);

        if($insert_stmt->execute()){
            $msg['message'] = 'Voter Inserted Successfully';
        }else{
            $msg['message'] = 'Voter Not Inserted';
        } 
        
    }else{
        $msg['message'] = 'Oops! empty field detected. Please fill all the fields';
    }
}
else{
    $msg['message'] = 'Please fill all the fields | name';
}
//ECHO DATA IN JSON FORMAT
echo  json_encode($msg);
?>