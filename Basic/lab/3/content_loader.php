<?php
/**
 * Created by PhpStorm.
 * User: gautham
 * Date: 9/12/16
 * Time: 7:51 AM
 */
// Delay to show that image loads after the form is loaded.
sleep(4);
echo '<form method="post" onsubmit="loadBook(); return false;" action="book_search.php"><table class="table table-hover"><tr><td>ISBN</td><td><input type="text" class="form-control" id="input_isbn"/></td></tr><tr><td><input type="submit" class="form-control" value="Search"/></td></tr></table></form>';