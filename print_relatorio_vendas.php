<style>
	table td{
		text-align: center;
	}

</style>

<?php
include "config.php";
include "funcoes/format_data.php";
				$dataInicial = trim($_POST['data']);
				$dataInicial2 = format_data($dataInicial);

				$dataFinal = trim($_POST['data2']);
				$dataFinal2 = format_data($dataFinal);

 echo '<table border="1" cellspacing="0">
	<tr>
		<td colspan="6" style="text-align:center;font-weight:bold;font-size:18px">Relat&oacute;rio de Vendas no per&iacute;odo de '.$dataInicial.' &acute; '.$dataFinal2.'</td>
	</tr>
	<tr>
		<td>Cliente</td>
		<td>produto</td>
		<td>Quantidade</td>
		<td>valor</td>
		<td>Total</td>
		<td>Data da compra</td>
	</tr>';



				$mysql = mysql_query("SELECT * FROM vendas WHERE data BETWEEN '$dataInicial2' AND '$dataFinal2'") or die(mysql_error());
				while($res = mysql_fetch_array($mysql)){
					$data = format_data_Normal($res['data']);
							echo '		<tr><td>'.$res['cliente'].'</td>
										<td>'.$res['produto'].'</td>
										<td>'.$res['quantidade'].'</td>
										<td>'.$res['valor'].'</td>
										<td>'.$res['total'].'</td>
										<td>'.$data.'</td></tr>';
				}
				echo '</table>';
?>