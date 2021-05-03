<?php
$array = file_get_contents('php://input');

echo json_encode($array);