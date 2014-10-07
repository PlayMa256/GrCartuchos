<?php
include_once "config.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="css/style.css" />
	<title></title>
	<script src="js/jquery.js"></script>
	<script src="js/mask.js" type="text/javascript"></script>

<script>
jQuery(function($){
       $(".data").mask("99-99-9999");
});
</script>
	<title></title>

</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
		<div id="content">
			<form method="post" action="relatorioCliente_Nota.php" method="post">
		<label>
			<span>Cliente</span>
			<select name="cliente" id="">
				<?php
					$select = mysql_query("SELECT * FROM clientes ORDER BY nome ASC");
					while($res = mysql_fetch_array($select)){
						echo '<option value="'.$res['id'].'">'.utf8_encode($res['nome']).'</option>';
					}
				?>
			</select>
		</label>
				<label>
					<span>DATA ENTRE:</span>
					<input type="text" name="data" class="data" />
				</label>
				<label>
					<span>E :</span>
					<input type="text" name="data2" class="data" />
				</label>
				<input type="submit" value="Imprimir" />
			</form>

		</div>
<div class="clear"></div>
	</div>
</body>
</html>