<?php
$user = file_get_contents('php://input');
$user = json_decode($user, true);
$user['nom'] = "Joubert";
echo json_encode($user);