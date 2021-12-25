<?php
include 'database.php';
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	
	// Validate.

	$mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug  = 0;
    
    $mail->Host = 'smtp.hostinger.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'helpme@tripgusto.com';
    $mail->Password = 'Akashrawat1997';
    $mail->setFrom('helpme@tripgusto.com', 'Support Trip Gusto');
    $mail->addAddress('aakkicoool@gmail.com', 'Akash Rawat');
    $mail->addAddress('aadddude@gmail.com', 'Aditya Singh Rawat');
    $mail->addAddress('helpme@tripgusto.com', 'Support Trip Gusto');
    if ($mail->addReplyTo($request['email'], $request['name'])) {
        $mail->Subject = 'New Query for Trip Gusto';
        $mail->isHTML(false);
        $mail->Body = <<<EOT
        Email: {$request['email']}
        Name: {$request['name']}
        Phone: {$request['phone']}
        From: {$request['date1']}
        To: {$request['date2']}
        Pickup: {$request['pickup']}
        Message: {$request['message']}
        EOT;
    }
	// if(trim($request['name']) === '' || (float)$request['phone'] < 0)
	// {
	// 	return http_response_code(400);
	// }
	$name = $request['name'];
	$phone = $request['phone'];
    $email = $request['email'];
    $pickup = $request['pickup'];
    $date_from = $request['date_from'];
    $date_to = $request['date_to'];
    $message = $request['message'];
	$queryDate = date('m/d/Y h:i:s a', time());
	$sql = "INSERT INTO CustomerData (id,name,phone,email,pickup,date_from,date_to,message,queryDate) 
            VALUES (null,'$name',$phone,'$email','$pickup','$date_from','$date_to','$message','$queryDate')";
	if($db->query($sql))
	{
		http_response_code(201);
		$qdata = [
		'id' => mysqli_insert_id($db),
        'name' => $name,
		'phone' => $phone, 
        'email' => $email, 
        'pickup' => $pickup, 
        'date_from' => $date_from, 
        'date_to' => $date_to, 
        'message' => $message
        ];
		echo json_encode($qdata);
	}
	else
	{
		http_response_code(422);
	}
}