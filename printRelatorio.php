<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="css/style.css" />
	<script src="js/jquery.js"></script>
	<script src="js/mask.js" type="text/javascript"></script>

<script>
jQuery(function($){
       $(".data").mask("99/99/9999");
});
</script>
	<title></title>

</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
		<div id="content">
			<form method="post" action="relatorioGeral.php">
				<label>
					<span>data</span>
					<input type="text" name="data" class="data" />
				</label>
				<input type="submit" value="Imprimir" />
			</form>

		</div>
<div class="clear"></div>
	</div>
</body>
</html>