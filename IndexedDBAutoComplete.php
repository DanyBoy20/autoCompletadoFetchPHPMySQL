<?php
$con = new PDO("mysql:host=localhost; dbname=prueba; charset=utf8", 'root', '123456789');

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