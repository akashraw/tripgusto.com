<?php
include 'database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
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
	$sql = "INSERT INTO datab (id,name,phone,email,pickup,date_from,date_to,message) 
            VALUES (null,'$name',$phone,'$email','$pickup','$date_from','$date_to','$message')";
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