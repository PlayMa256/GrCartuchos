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
		<script src="js/jquery.js"></script>
	<script src="js/mask.js" type="text/javascript"></script>

<script>
jQuery(function($){
		$(".data").mask("99-99-9999");



});
</script>

</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
		<div id="content">
			<form action="relatorioGeral.php" method="post">
				<span>data inicio: </span>
				<input type="text" name="dataini" class="data" />

				<span>data final: </span>
				<input type="text" name="datafina" class="data" />

				<input type="submit" value="ENVIAR" />

			</form>

		</div>
<div class="clear"></div>
	</div>
</body>
</html>