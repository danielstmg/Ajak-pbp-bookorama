<?php

require_once('./lib/db_login.php');

$customerid = $_GET['id'];
$query = "SELECT * FROM customers where customerid=".$customerid;
$result = $db->query($query);

if(!$result){
    die("Could not query the database: <br>".$db->error);
}

while($row = $result->fetch_object()){
    echo '
    Name: '.$row->name.'<br>
    Address: '.$row->address.'<br>
    City: '.$row->city.'<br>';
}
$result->free();
$db->close();

?>