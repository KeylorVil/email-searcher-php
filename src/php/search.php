<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

$data = json_decode(file_get_contents('php://input'), true);
$response = json_decode(file_get_contents('https://ltv-data-api.herokuapp.com/api/v1/records.json?email='.$data["email"]), true);
print_r(json_encode($response));

?>