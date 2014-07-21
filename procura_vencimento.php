<?php
include_once "config.php";
include_once "diffData.function.php";
include_once "funcoes/format_data.php";
date_default_timezone_set('America/Sao_Paulo');
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
</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
		<div id="content">
	<form method="post" action="" method="post">
		<h2>Coloque a data inicial, ELE IRÁ PESQUISAR OS CLIENTES QUE ESTÃO DEVENDO ATÉ O DIA DE HOJE <?php echo date('d-m-Y');?></h2>
		<label>
			<span>Data Inicial</span>
			<input type="text" name="dataInicial" class="data" />
		</label>		
				<input type="hidden" value="enviar" name="acao" />
				<input type="submit" value="Procurar" />
			</form>

		
	<?php
	if(isset($_POST['acao']) && $_POST['acao'] == 'enviar'){
		$dataInicial = format_data($_POST['dataInicial']);
		$now = date("Y-m-d");
		echo 'data: '.$dataInicial.'<br/>'.$now;
				echo'<table cellspan="0" border="1">
				<tr>
					<td>Cliente</td>
					<td>Quantidade</td>
					<td>Produto</td>
					<td>Valor</td>
					<td>Total</td>
					<td>Data</td>
				</tr>';
		
		$qr = mysql_query("SELECT * FROM vendas WHERE data BETWEEN '$dataInicial' AND '$now' AND status = 1 AND metodo = 'aprazo' ORDER BY cliente ASC") or die(mysql_error());
		while($res = mysql_fetch_array($qr)){
			$data = format_data_Normal($res['data']);
					echo '<tr>
					<td>'.utf8_encode($res['cliente']).'</td>
					<td>'.$res['quantidade'].'</td>
					<td>'.$res['produto'].'</td>
					<td>'.$res['valor'].'</td>
					<td>'.$res['total'].'</td>
					<td>'.$data.'</td>
					</tr>';
		}

	echo '</table>';

}
	?>


</div><div class="clear"></div>
	</div>
</body>
</html>