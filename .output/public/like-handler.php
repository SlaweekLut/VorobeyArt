<?php
$input = json_decode(file_get_contents('php://input'), true);
$client_id = $input['id'];
$toggle = $input['toggle'];

$jsonString = file_get_contents('api/likes.json');
$data = json_decode($jsonString, true);

try {
  if (array_key_exists($client_id, $data)) {
    if ($toggle) {
      $data[$client_id] = !$data[$client_id];
    }
  } else {
    $data[$client_id] = false;
  }
  
  $newJsonString = json_encode($data);
  file_put_contents('api/likes.json', $newJsonString);
  
  header('Content-type: application/json');
  echo json_encode(array('id' => $client_id, 'isLiked' => $data[$client_id], 'likesCount' => count(array_filter($data))));
} catch (Exception $e) {
  http_response_code(500);
}

?>