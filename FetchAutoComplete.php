<?php
require_once("config.php");


$host = DB_HOST;
$user = DB_USER;
$pass = DB_PASS;
$dbname = DB_NAME;

$dsn = 'mysql:host=' . $host . ';dbname=' . $dbname . ';charset=utf8';
$opciones = array(PDO::ATTR_PERSISTENT => true, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
$con = new PDO($dsn, $user, $pass, $opciones);

if (isset($_GET["id"])) {
    $id = trim($_GET["id"]);
    if ($id != "") {
        $query = "SELECT contactFirstName FROM customers WHERE contactFirstName LIKE '" . $id . "%'";
        $stmt = $con->prepare($query);
        $stmt->execute();
        $resultSet = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($resultSet);
    } 
}
