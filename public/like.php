<?php
$jsonString = file_get_contents('api/likes.json');
$data = json_decode($jsonString, true);

// $data[0]['activity_name'] = "TENNIS";
// or if you want to change all entries with activity_code "1"
$data[$_POST['title']] = $_POST['like'];

$newJsonString = json_encode($data);
file_put_contents('api/likes.json', $newJsonString);
?>