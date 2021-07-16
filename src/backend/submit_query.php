<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Credentials: true');
header("Access-Control-Allow-Methods: PUT, GET, POST, DELETE");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");
use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
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
        if (!$mail->send()) {
            echo "Mailer Error: ";
        } 
        else {
            echo 'Message sent! Thanks for contacting us.';
            echo "<script>
                 alert('message sent succesfully');
                 window.history.go(-1);
                 </script>";
        }
    } 
    else {
        $msg = 'Share it with us!';
    }
}
else
{
    http_response_code(422);
}

?>

