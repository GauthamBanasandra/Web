<?php
/**
 * Created by PhpStorm.
 * User: gautham
 * Date: 9/12/16
 * Time: 7:51 AM
 */
extract($_GET);
$jsonStr = file_get_contents('db.json');
// Don't forget the second parameter 'true'.
$jsonDb = json_decode($jsonStr, true);
echo json_encode($jsonDb[$isbn]);