<?php
include_once "config.php";
include_once "backupRoutine.php";
include_once "diffData.function.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="css/style.css" />
	<title></title>

</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
		<div id="content">
			<?php
					date_default_timezone_set('America/Sao_Paulo');
						backup_db();
			?>

		</div>
<div class="clear"></div>
	</div>
</body>
</html>