<?php
include_once "config.php";
include_once "funcoes.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="css/style.css" />
	<title>Relat&oacute;rio de Produtos em estoque</title>
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
			<h1>Relatório do dia <?php echo date("d-m-Y");?></h1>
			<table border="1" width="100%" cellpadding="0" cellspacing="0">
				<tr>
					<th>Produto</th>
					<th>Quantidade</th>
				</tr>
				<?php 
					$sql = mysql_query("SELECT * FROM estoque");
					while($res = mysql_fetch_array($sql)){
						$produto = $res['id_produto'];
						$quantidade = $res['quantidade'];
						echo '<tr>';
							echo '<td>'.retornaNomeProduto($produto).'</td>';
							echo '<td>'.$quantidade.'</td>';
						echo '<tr/>';
					}

				?>
			</table>
		</div>
<div class="clear"></div>
	</div>
</body>
</html>