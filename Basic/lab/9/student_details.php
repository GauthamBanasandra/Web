<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 9/12/16
 * Time: 10:23 PM
 */
extract($_GET);

$file = file_get_contents('db.json');
$db = json_decode($file, true);

if ($cmd == 'create')
{
    if (isset($db[$usn]))
    {
        echo json_encode(array('msg' => 'already exists', 'code' => 1));
    } else
    {
        $db[$usn] = array('usn' => $usn);
        file_put_contents('db.json', json_encode($db));
        echo json_encode(array('msg' => "$usn created", 'code' => 0));
    }
} elseif ($cmd == 'update')
{
    if (isset($db[$usn]))
    {
        $allowed_params = array('name', 'age', 'gender', 'gpa');
        if (in_array($param, $allowed_params))
        {
            $db[$usn][$param] = $value;
            file_put_contents('db.json', json_encode($db));
            echo json_encode(array('msg' => "updated $param of $usn", 'code' => 0));
        } else
        {
            echo json_encode(array('msg' => "invalid parameter $param", 'code' => 1));
        }
    } else
    {
        echo json_encode(array('msg' => "$usn does not exist", 'code' => 1));
    }
} else if ($cmd == 'read')
{
    if (isset($db[$usn]))
    {
        echo json_encode($db[$usn]);
    } else
    {
        echo json_encode(array('msg' => "$usn does not exist", 'code' => 1));
    }
}