<?php

if($_POST)
{

function getRealIpAddr()
{
    if (!empty($_SERVER['HTTP_CLIENT_IP']))   //check ip from share internet
    {
      $ip=$_SERVER['HTTP_CLIENT_IP'];
    }
    elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR']))   //to check ip is pass from proxy
    {
      $ip=$_SERVER['HTTP_X_FORWARDED_FOR'];
    }
    else
    {
      $ip=$_SERVER['REMOTE_ADDR'];
    }
    return $ip;
}

date_default_timezone_set('America/New_York');
$the_date = date('Y-m-d');  
$the_time = date('h:i:s A');


$myfile = fopen("logs.txt", "a") or die("Unable to open file!");
$txt = $_POST['name'].','.$_POST['email'].','.$the_date.$the_time.','.getRealIpAddr();
fwrite($myfile, "\n". $txt);
fclose($myfile);

}

?>