<!DOCTYPE html>
<html>
<head>
    <title>
        Username availability status
    </title>
    <script>
        <?php
        /**
         * Created by PhpStorm.
         * User: gautham
         * Date: 12/9/16
         * Time: 12:05 AM
         */
        extract($_GET);
        $usernamesRegistered = array('Tony Stark', 'Bruce Wayne', 'Clark Kent', 'Peter Parker');
        $isRegistered = false;
        foreach ($usernamesRegistered as $username)
        {
            if ($username == $name)
            {
                $isRegistered = true;
                break;
            }
        }
        if ($isRegistered)
        {
            echo 'parent.displayResult(true);';
        }
        else
        {
            echo 'parent.displayResult(true);';
        }
        ?>
    </script>
</head>
</html>
