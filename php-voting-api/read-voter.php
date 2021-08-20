<?php
// SET HEADER
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json; charset=UTF-8");

// INCLUDING DATABASE AND MAKING OBJECT
require 'database.php';
$db_connection = new Database();
$conn = $db_connection->dbConnection();

// CHECK GET email PARAMETER OR NOT
if(isset($_GET['email']))
{
    //IF HAS email PARAMETER
    $voter_email = filter_var($_GET['email'],FILTER_DEFAULT, [
        'options' => [
            'default' => 'all_voters',
        ]
    ]);
}
else{
    $voter_email = 'all_voters';
}

// MAKE SQL QUERY
// IF GET CANDemailATE email, THEN SHOW CANDemailATES BY email OTHERWISE SHOW ALL POSTS
$sql = is_string($voter_email) ? "SELECT * FROM `voters` WHERE email='$voter_email'" : "SELECT * FROM `voters`"; 
echo json_encode([$sql]);

$stmt = $conn->prepare($sql);

$stmt->execute();

//CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE POSTS ARRAY
    $voters_array = [];
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
        $voter_data = [
            'email' => $row['email'],
            'voted_for' => $row['voted_for'],
        ];
        // PUSH POST DATA IN OUR $posts_array ARRAY
        array_push($voters_array, $voter_data);
    }
    //SHOW POST/POSTS IN JSON FORMAT
    echo json_encode($voters_array);
 

}
else{
    //IF THER IS NO POST IN OUR DATABASE
    echo json_encode(['message'=>'No candemailate found']);
}
?>