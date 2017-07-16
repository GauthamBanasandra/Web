<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 8/12/16
 * Time: 9:21 AM
 */
header('Content-Type', 'application/json');
$json = file_get_contents('db.json');
sleep(5);
echo $json;