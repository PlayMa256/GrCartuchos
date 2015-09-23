<?php include_once "config.php";
include_once "funcoes/format_data.php";
include_once "funcoes.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title></title>
<style type="text/css" media="all">
	#box{
		width: 100%;
		margin:0 auto;
	}
	#box h2{
		text-transform: uppercase;
	}
	table{
		font-size:14pt;
		border:1px solid #000;
	}
	table tr td{
		padding:8px 35px 8px 35px;

	}
	#total{
		margin-top:50px;
		font-size:20pt;
	}	

</style>
</head>
<script>
	window.print();
	
</script>
<body>
	<?php
		include_once("header_print.php");
	?>
	<br />
	
	<div style="clear:both"></div>
<div id="box">
		<?php $cliente_id = trim($_POST['cliente']);
	$pegaNomeCliente = mysql_query("SELECT nome FROM clientes WHERE id = '$cliente_id'");
	$result = mysql_fetch_array($pegaNomeCliente);
	$nomeCliente = $result['nome']; ?>
	<h2 style="text-align:center"><?php echo utf8_encode($nomeCliente); ?></h2>
	<table border="1" align="center" cellspacing="0">
		<tr>
			<td style="font-weight:bold;text-align:center;">Qtde</td>
			<td style="font-weight:bold;text-align:center;">Produto</td>
			<td style="font-weight:bold;text-align:center;">Valor</td>
			<td style="font-weight:bold;text-align:center;">Total</td>
			<td style="font-weight:bold;text-align:center;">Data</td>
		</tr>
			<?php

				$Cliente = $_POST['cliente'];
				$dataInicial = $_POST['data'];
				$data = format_data($dataInicial);
				$now = format_data($_POST['data2']);


				// echo 'data: '.$data;
				// echo 'datanow = '.$now;

				$TotalGeral = 0;
				$select = mysql_query("SELECT * FROM vendas WHERE data BETWEEN '$data' AND '$now' AND id_cliente = '$Cliente' AND status = 1 AND metodo = 'aprazo' ORDER BY data ASC") or die(mysql_error());
				while($res = mysql_fetch_array($select)){
					$TotalGeral += $res['total'];
					$valores = str_replace(".", ",", $res['valor']);
					$totais = str_replace(".", ",", $res['total']);
					$data = format_data_Normal($res['data']);

					echo '<tr>
							<td style="text-align:center">'.$res['quantidade'].'</td>
							<td>'.$res['produto'].'</td>
							<td>'.$valores.'</td>
							<td>'.$totais.',00</td>
							<td>'.$data.'</td>
						</tr>';
				}

			?>
	</table>


	<?php 
		echo '<h1>Total: R$'.(float)$TotalGeral.',00</h1>';
		?>
		<!-- <h1 id="total">Total: 192,00</h1> -->
	</div>
</body>
</html>