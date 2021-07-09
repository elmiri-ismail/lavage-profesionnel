<?php

$connect = mysqli_connect("localhost","root","Miriismail2002","admin");

if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
    exit();
  };

if (isset($_POST['username']) && isset($_POST['password'])) {
$username = $_POST['username'];
$password = $_POST['password'];

$sql = "SELECT * FROM admin WHERE username = '$username' AND password = '$password' ";
$result = mysqli_query($connect,$sql);

if(mysqli_num_rows($result) == 1){
  session_start();
  $_SESSION['login'] = "loginTrue";
  header("location:../../crud/index.html");
}else{
  header("location:../");
}
}else{
  header("location:../");
}


?>