<?php 
include_once "config.php";
include_once "funcoes/format_data.php";

$cliente_id = trim($_POST['id_cliente']);
	$pegaNomeCliente = mysql_query("SELECT nome FROM clientes WHERE id = '$cliente_id'");
	$result = mysql_fetch_array($pegaNomeCliente);
	$nomeCliente = $result['nome']; ?>
	<h2 style="text-align:center"><?php echo $nomeCliente; ?></h2>
	<table border="1" align="center" cellspacing="0">
		<tr>
			<td style="font-weight:bold;text-align:center;">Qtde</td>
			<td style="font-weight:bold;text-align:center;">Produto</td>
			<td style="font-weight:bold;text-align:center;">Valor</td>
			<td style="font-weight:bold;text-align:center;">Total</td>
			<td style="font-weight:bold;text-align:center;">Data</td>
		</tr>

<?php
include_once "config.php";
include_once "funcoes/format_data.php";


$id_Cliente = (int)$_POST['id_cliente'];
$TotalGeral = 0;
$sql = mysql_query("SELECT * FROM vendas WHERE id_cliente = '$id_Cliente' AND status = 0") or die(mysql_error());
while($res = mysql_fetch_array($sql)){
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