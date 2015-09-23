<?php
require_once "config.php";
include_once "colocaVirgulaArray.function.php";
include_once "funcoes/format_data.php";

// $ms = mysql_query("SELECT * FROM clientes");
// while($res = mysql_fetch_array($ms)){
// 	$id_cliente = $res['id'];
// 	$cliente = $res['nome'];
// 	$up = mysql_query("UPDATE vendas SET id_cliente = '$id_cliente' WHERE cliente = '$cliente'") or die(mysql_error());
// }


?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="css/style.css" />
	<title></title>
    <link rel="stylesheet" href="js/css/bootstrap.css">  
    <script src="js/jquery.js" type="text/javascript"></script>   
    <script src="js/js/bootstrap.js" type="text/javascript"></script> 
    <script type="text/javascript">
    $(document).ready(function(){
    	$("#valorPago").hide();
    	$("#pagamento").hide();
    	var ValorTotalASerPago = 0;
		$('#checado[type=checkbox]').on("click", function(){
			// $(this).each(function(i, val){
			// 	var k = $(this).val();
			// });
			$("#valorPago").show();
			$("#pagamento").show();

		});
    });
    
    </script>
</head>

<body>
	<div id="box">
	<?php include "menu.php";?>
		<div id="content">
			<form action="" method="post">
				<label>
					<span>Cliente</span>
					<select name="cliente" id="">
						<?php
							$select = mysql_query("SELECT * FROM clientes ORDER BY nome ASC");
							while($res = mysql_fetch_array($select)){
								echo '<option value="'.utf8_encode($res['id']).'">'.utf8_encode($res['nome']).'</option>';
							}
						?>
					</select>
				</label>

			
				<input type="submit" value="Enviar" />
				<input type="hidden" name="acao" value="enviar" />
			</form>
<?php 
if(isset($_POST['acao']) && $_POST['acao'] == 'enviar'){
	// $cliente = trim($_POST['cliente']);
	// echo $cliente;
	echo '<form action="" method="post" enctype="mutipart-form/data" id="formulario">
	<table border="1" cellspacing="2">
		<tr>
			<td style="font-weight:bold">Produto</td>
			<td style="font-weight:bold">Quantidade</td>
			<td style="font-weight:bold">Valor</td>
			<td style="font-weight:bold">Data</td>
			<td style="font-weight:bold">Ação</td>
		</tr>';

		$cliente = trim($_POST['cliente']);
		$pesquisa = mysql_query("SELECT nome FROM clientes WHERE id = '$cliente'");
		$ress = mysql_fetch_array($pesquisa);
		$nomeCliente = $ress['nome'];

		echo 'Cliente: '.$nomeCliente;

			$select = mysql_query("SELECT * FROM vendas WHERE id_cliente = '$cliente' AND metodo = 'aprazo' AND status = 1 ORDER BY data ASC") or die(mysql_error());
			while($res2 = mysql_fetch_array($select)){
				$data = format_data_Normal($res2['data']);
				echo '<tr>
						<td>'.$res2['produto'].'</td>
						<td>'.$res2['quantidade'].'</td>
						<td>'.$res2['total'].'</td>
						<td style="font-weight:bold">'.$data.'</td>
						<td><input type="checkbox" value="'.$res2['id'].'" name="ids[]" id="checado" />Pagar </td>

				</tr>';




			}

			echo '	</table>
	<input type="text" name="valorPago" id="valorPago" />
	<input type="submit" value="PAGAR" id="pagamento" />
	<input type="hidden" name="acao" value="pagar" />
</form>';




}
	
?>

<?php
if(isset($_POST['acao']) && $_POST['acao'] == 'pagar'){
	$quantidades = count($_POST['ids']);
	$valorPago = $_POST['valorPago'];
	$totalzin = 0;
	$valores[] = 0;
	$pedidos[] = 0;
	$cliente[] = 0;
	for($i=0;$i<$quantidades;$i++){
		$idConta = $_POST['ids'][$i];
		$mysql_query = mysql_query("SELECT * FROM vendas WHERE id='$idConta'");
		$res = mysql_fetch_array($mysql_query);
		$total = $res['total'];
		$dia_atual = date('Y-m-d');

		$update = mysql_query("UPDATE vendas SET status = 0 WHERE id = '$idConta'");
		$inserirNoPagamento = mysql_query("INSERT INTO pagamento_efetuado (id_item, data) VALUES ('$idConta', '$dia_atual') ");

		if($update){
			echo '<br/><strong>pagamento atualizado</strong>';
		}else{
			echo 'problema ao cadastrar pagamento';
		}


		// $totalzin += $total;
		// $valores = $total;
		// $pedidos = $res['produto'];


		// 	$arrayValues = array_map('mysql_real_escape_string', array_values($idConta));
		// 	$values = implode(", ", $arrayValues);

		// 	$mysql_queryCliente = mysql_query("SELECT cliente FROM vendas WHERE id='$idConta'");
		// 	$res = mysql_fetch_array($mysql_queryCliente);
		// 	$ClienteDoID = $res['cliente'];


		// 	$arrayPedidos = array_map('mysql_real_escape_string', array_values($pedidos));
		// 	$ValuesPedidos = implode(", ", $arrayPedidos);

		// 	$arrayValores = array_map('mysql_real_escape_string', array_values($valores));
		// 	$valuesValores = implode(", ", $arrayValores);



	// }

	// $subtotal = $totalzin - $valorPago;
	// if($subtotal == 0){
	// 	for($i=0;$i<$quantidades;$i++){
	// 		$idConta = $_POST['ids'][$i];
	// 		$troca = mysql_query("UPDATE FROM vendas SET status = 0 WHERE id = '$idConta'");
	// 		$inserir = mysql_query("INSERT INTO pagamentos_efetuados (ids, cliente, produtos, valortotal, valorpago) VALUES ('$values', '$ClienteDoID', '$ValuesPedidos', $valuesValores', '$valorPago')");

	// 		echo '<script>alert("Pagamento integral efetuado");</script>';

	// 	}

	// }else if($subtotal != 0){
	// 	while(1){
	// 		if($subtotal > $valores[$k]){
	// 			$k++;
	// 		}else if($subtotal < $valores[$k]){
	// 			$valores[$k] = $subtotal;
	// 			break;

	// 		}

	// 	}
	// 		$arrayValores = array_map('mysql_real_escape_string', array_values($valores));
	// 		$valuesValores2 = implode(", ", $arrayValores);


	// 	$insert = mysql_query("INSERT INTO pagamentoAberto (ids, cliente, produtos, valortotal, valorPago) VALUES ('$values', '$ClienteDoID', '$ValuesPedidos', '$valuesValores2', '$valorPago')");
	// }



// }

}
}




?>


		</div>
<div class="clear"></div>
	</div>
</body>
</html>