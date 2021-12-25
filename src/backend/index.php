<?php
include 'database.php';
$data  = [];

$sql = "SELECT * FROM datab";
if($result = mysqli_query($db,$sql))
{
	$i = 0;
	while($row = $result->fetch_assoc())
	{
		$data[$i]['id'] = $row['id'];
		$data[$i]['name'] = $row['name'];
		$data[$i]['phone'] = $row['phone'];
		$data[$i]['email'] = $row['email'];
		$data[$i]['pickup'] = $row['pickup'];
		$data[$i]['date_from'] = $row['date_from'];
		$data[$i]['date_to'] = $row['date_to'];
		$data[$i]['message'] = $row['message'];
		$i++;
	}
	echo json_encode($data);
}
else
{
	http_response_code(404);
}