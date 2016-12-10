<?php
/**
 * Created by PhpStorm.
 * User: gautham
 * Date: 10/12/16
 * Time: 12:09 AM
 */
extract($_GET);

$file = file_get_contents('user_db.json');
$db = json_decode($file, true);
$db['count'] += 1;
echo $db['count'];
file_put_contents('user_db.json', json_encode($db));