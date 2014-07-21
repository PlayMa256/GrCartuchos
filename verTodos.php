<?php
include_once "config.php";
include_once "funcoes/format_data.php";
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
			<form method="post" action="imprime_Todas_vendas.php" method="post">
		<label>
			<span>Cliente</span>
			<select name="id_cliente" id="">
				<?php
					$select = mysql_query("SELECT * FROM clientes ORDER BY nome ASC");
					while($res = mysql_fetch_array($select)){
						echo '<option value="'.$res['id'].'">'.utf8_encode($res['nome']).'</option>';
					}
				?>
			</select>
		</label>
<!-- 				<label>
					<span>data - Apartir de: </span>
					<input type="text" name="data" class="data" />
				</label> -->

				<input type="submit" value="Imprimir" />
			</form>

		</div>
<div class="clear"></div>
	</div>
</body>
</html>