<?php

require_once('./lib/db_login.php');

$isbn = $_GET['id'];
$query = 'SELECT * FROM books WHERE isbn ="'.$isbn.'"';
$result = mysqli_query($db, $query);

if(!$result){
    die("Could not query the database: <br>".$db->error);
}

while($row = $result->fetch_object()){
    echo '
    ISBN: '.$row->isbn.'<br>
    Author: '.$row->author.'<br>
    Title: '.$row->title.'<br>
    Price: '.$row->price.'<br>';
}
$result->free();
$db->close();

?>