<html>
<head>
    <script>
        <?php
        /**
         * Created by PhpStorm.
         * User: gautham
         * Date: 8/12/16
         * Time: 11:02 PM
         */
        extract($_GET);
        $jsonStr = file_get_contents('db.json');
        $jsonDb = json_decode($jsonStr, true);
        echo 'parent.updateStudentDetails("' . $jsonDb[$usn]['usn'] . ';' . $jsonDb[$usn]['name'] . ';' .
            $jsonDb[$usn]['dept'] . ';' . $jsonDb[$usn]['gpa'] . '");';
        ?>
    </script>
</head>
</html>
