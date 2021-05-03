<?php
$data = ['nom' => 'Chatelin', 'prenom'=>'Olivier'];
$data = json_encode($data);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button data-tosend = <?=$data?> id="send">ok</button>
<p id="result"></p>
<script src="script.js"></script>
</body>
</html>