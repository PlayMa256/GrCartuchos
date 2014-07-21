<?php
include_once "config.php";
date_default_timezone_set('America/Sao_Paulo');
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="../css/style.css" />
	<title></title>
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
			<form action="retiradas_print.php" method="post">
				<label>
					<span>De: </span>
					<input type="text" name="data" class="data" />
				</label>

			<label>
					<span>Até: </span>
					<input type="text" name="data2" class="data" />
				</label>

				<input type="hidden" name="acao" value="enviar" />
				<input type="submit" value="Visualizar" />	
			</form>
			<br />
			<br />
			<br />
			<br />




		</div>
<div class="clear"></div>
	</div>
</body>
</html>