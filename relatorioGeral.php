<?php
include_once "config.php";
include_once "backupRoutine.php";
include_once "diffData.function.php";
include_once "funcoes/format_data.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="css/style.css" />
	<title></title>
	<style>
		table{
			text-align: center;
			width:400px;
			margin:0 auto;
		}
		table tr td{
			padding:10px;
			font-size:18px;
		}
		body{
			background: none;
		}
	</style>
	<script>
		window.print();
	</script>

</head>

<body>
	<table border="1px" cellspacing="0">
		<tr>
			<td colspan="2" style="font-size:20px;font-weight:bold;">Relatório MENSAL</td>
		</tr>
		
	<?php
		$inicio = format_data($_POST['dataini']);
		$hoje = format_data($_POST['datafina']);

		$select = mysql_query("SELECT * FROM vendas WHERE data BETWEEN '$inicio' AND '$hoje'") or die(mysql_error());
		$totalVendas = 0;
		while($res = mysql_fetch_array($select)){
			$totalVendas += $res['total'];
		}


		$SelectPedidos = mysql_query("SELECT * FROM pedidos WHERE data BETWEEN '$inicio' AND '$hoje'")or die(mysql_error());
		$totalPedidos = 0;
		while($resPedios = mysql_fetch_array($SelectPedidos)){
			$totalPedidos += $resPedios['valor'];
		}


		$selectRetiradas = mysql_query("SELECT * FROM retiradas WHERE data BETWEEN '$inicio' AND '$hoje'")or die(mysql_error());
		$totalRetiradas = 0;
		while($resRetiradas = mysql_fetch_array($selectRetiradas)){
			$totalRetiradas += $resRetiradas['valor'];
		}




		$selectDespesas = mysql_query("SELECT * FROM despesas WHERE data BETWEEN '$inicio' AND '$hoje'")or die(mysql_error());
		$totalDespesas = 0;
		while($resDespesas = mysql_fetch_array($selectDespesas)){
			$totalDespesas += $resDespesas['valor'];
		}



		?>
		<tr>
			<td>Total Vendas:</td>
			<td>R$<?php echo $totalVendas; ?>,00</td>
		</tr>
		<tr>
			<td>Total Pedidos:</td>
			<td>R$<?php echo $totalPedidos; ?>,00</td>
		</tr>
		<tr>
			<td>Total Retiradas:</td>
			<td>R$<?php echo $totalRetiradas; ?>,00</td>
		</tr>
		<tr>
			<td>Total Despesas:</td>
			<td>R$<?php echo $totalDespesas; ?>,00</td>
		</tr>

</table>
<p style="width:300px;margin:5px auto;text-align:center;font-weight:bold;">
<?php
$data = date("m");
echo 'Mês de ';
	switch($data){
		case 1:
		echo 'Janeiro';
		break;
				case 2:
		echo 'Fevereiro';
		break;
				case 3:
		echo 'Março';
		break;
				case 4:
		echo 'Abril';
		break;
				case 5:
		echo 'Maio';
		break;
				case 6:
		echo 'Junho';
		break;
				case 7:
		echo 'Julho';
		break;
				case 8:
		echo 'Agosto';
		break;
				case 9:
		echo 'Setembro';
		break;
				case 10:
		echo 'Outubro';
		break;
				case 11:
		echo 'Novembro';
		break;
				case 12:
		echo 'Dezembro';
		break;
	}


?>
</p>
</body>
</html>