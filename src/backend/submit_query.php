<?php

use PHPMailer\PHPMailer\PHPMailer;
require 'vendor/autoload.php';
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
    if ($mail->addReplyTo($_POST['email'], $_POST['name'])) {
        $mail->Subject = 'New Query for Trip Gusto';
        $mail->isHTML(false);
        $mail->Body = <<<EOT
Email: {$_POST['email']}
Name: {$_POST['name']}
Phone: {$_POST['phone']}
From: {$_POST['date1']}
To: {$_POST['date2']}
Pickup: {$_POST['pickup']}
Message: {$_POST['message']}
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

?>

