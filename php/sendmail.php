<meta http-equiv="Content-type" content="text/html; charset=utf-8" />

 
<?php

header('Content-Type: text/html; charset=utf-8');

// Variables
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
// if( isset($name) && isset($email) ) {

	// Avoid Email Injection and Mail Form Script Hijacking
	$pattern = "/(content-type|bcc:|cc:|to:)/i";
	// if( preg_match($pattern, $name) || preg_match($pattern, $phone) ) {
	// 	exit;
	// }

	// Email will be send
	$to = "softlafa@ya.ru"; // Change with your email address
	$sub = "Новый клиент"; // You can define email subject
	// HTML Elements for Email Body
	$body = '<strong>Имя: </strong>' . $name . '<br>' . '<strong>Телефон: </strong>' . $phone;
//Must end on first column
	$header = "From: Aigam.ru\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";

	// PHP email sender
	mail($to, $sub , $body, $headers);


?>