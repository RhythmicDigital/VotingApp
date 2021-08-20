<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: DELETE");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// GET DATA FORM REQUEST
$data = json_decode(file_get_contents("php://input"));


//CHECKING, IF email AVAILABLE ON $data
if(isset($data->email)){
    $msg['message'] = '';
    
    $post_email = $data->email;
    
    //GET POST BY email FROM DATABASE
    // YOU CAN REMOVE THIS QUERY AND PERFORM ONLY DELETE QUERY
    $check_post = "SELECT * FROM `voters` WHERE email=:voter_email";
    $check_post_stmt = $conn->prepare($check_post);
    $check_post_stmt->bindValue(':voter_email', $post_email,PDO::PARAM_STR);
    $check_post_stmt->execute();
    
    //CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
    if($check_post_stmt->rowCount() > 0){
        
        //DELETE POST BY email FROM DATABASE
        $delete_post = "DELETE FROM `voters` WHERE email=:voter_email";
        $delete_post_stmt = $conn->prepare($delete_post);
        $delete_post_stmt->bindValue(':voter_email', $post_email,PDO::PARAM_STR);
        
        if($delete_post_stmt->execute()){
            $msg['message'] = 'voter Deleted Successfully';
        }else{
            $msg['message'] = 'voter Not Deleted';
        }
        
    }else{
        $msg['message'] = 'Invalemail email';
    }
    // ECHO MESSAGE IN JSON FORMAT
    echo  json_encode($msg);
    
}
?>