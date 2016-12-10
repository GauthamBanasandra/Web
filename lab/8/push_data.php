<?php
/**
 * Created by PhpStorm.
 * User: gautham
 * Date: 10/12/16
 * Time: 12:34 AM
 */
extract($_GET);

$file = file_get_contents('chat_db.json');
$db = json_decode($file, true);
$db[] = array($id => $msg);
file_put_contents('chat_db.json', json_encode($db));
echo "$id $msg";