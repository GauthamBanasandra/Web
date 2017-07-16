<?php
/**
 * Created by PhpStorm.
 * User: gautham
 * Date: 10/12/16
 * Time: 6:43 AM
 */
header('Content-Type', 'text/event-stream');
while (true)
{
    $db = file_get_contents('chat_db.json');
    echo "data:$db\n\n";
    sleep(1);
}