<?php
extract($_GET);

$database=array('1PI13CS060;Gautham BA;CS;9.953','1PI12CS009;Student1;CS;10');
for($i=0; $i<count($database); $i++)
{
	if(explode(';', $database[$i])[0]==$usn)
	{
		echo '<html><head><script>parent.setFields("'.$database[$i].'");</script></head></html>';
	}
}
?>
