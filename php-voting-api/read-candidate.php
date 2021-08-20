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

// CHECK GET ID PARAMETER OR NOT
if(isset($_GET['id']))
{
    //IF HAS ID PARAMETER
    $candidate_id = filter_var($_GET['id'], FILTER_VALIDATE_INT,[
        'options' => [
            'default' => 'all_candidates',
            'min_range' => 1
        ]
    ]);
}
else{
    $candidate_id = 'all_candidates';
}

// MAKE SQL QUERY
// IF GET CANDIDATE ID, THEN SHOW CANDIDATES BY ID OTHERWISE SHOW ALL POSTS
$sql = is_numeric($candidate_id) ? "SELECT * FROM `candidates` WHERE id='$candidate_id'" : "SELECT * FROM `candidates`"; 

$stmt = $conn->prepare($sql);

$stmt->execute();

//CHECK WHETHER THERE IS ANY POST IN OUR DATABASE
if($stmt->rowCount() > 0){
    // CREATE POSTS ARRAY
    $candidates_array = [];
    
    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        
        $candidate_data = [
            'id' => $row['id'],
            'name' => $row['name'],
            'votecount' => $row['votecount'],
            'picture' => $row['picture']

        ];
        // PUSH POST DATA IN OUR $posts_array ARRAY
        array_push($candidates_array, $candidate_data);
    }
    //SHOW POST/POSTS IN JSON FORMAT
    echo json_encode($candidates_array);
 

}
else{
    //IF THER IS NO POST IN OUR DATABASE
    echo json_encode(['message'=>'No candidate found']);
}
?>