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
	h4, h5{
		font-weight: normal;
	}

</style>
<script type="text/javascript">
	//window.print();
</script>
<div id="box">
<table border="1" align="center" cellspacing="0">
    <tr>
        <td colspan="3"><h2 style="margin-bottom:-10px;">GR Cartuchos</h1>
						<h4 style="margin-bottom:-23px;">Rua Andr&eacute; Madsen, 377 - Cosm&oacute;polis</h4>
						<h5>(019) 3872-4872 | (019) 9-9203-7662</h5>
        </td>
        <td>
        	<h2 style=" margin-bottom: 0;">Entrega</h2>
        	<span>Data: <?php echo date('d-m-Y');?></span>
        </td>
    </tr>
<?php
	include 'config.php';
	include 'funcoes/format_data.php';
	$certo = 0;

	$cliente_id = trim($_POST['cliente']);
	$pegaNomeCliente = mysql_query("SELECT nome FROM clientes WHERE id = '$cliente_id'");
	$result = mysql_fetch_array($pegaNomeCliente);
	$nomeCliente = $result['nome'];

	echo '<tr>
        	<td colspan="4" style="font-weight:bold;text-align:left;">Cliente: '.$nomeCliente.'</td>
    	 </tr>';
    echo '<tr>
			<td style="font-weight:bold;text-align:center;">Qtde</td>
			<td style="font-weight:bold;text-align:center;">Produto</td>
			<td style="font-weight:bold;text-align:center;">Valor</td>
			<td style="font-weight:bold;text-align:center;">Total</td>
		</tr>';

	$prod = $_POST['produto'];
	$qtd = $_POST['quantidade'];
	$valor = $_POST['valor'];
	$metodo = trim($_POST['op']);
	$data = (empty($_POST['data'])) ? date("d-m-Y") : trim($_POST['data']);
	$data = format_data($data);
	$TotalGeral = 0;

	$quantidadeValores = count($_POST['produto']);

	//print_r ($_POST['produto']);

	for($i = 0; $i<$quantidadeValores;$i++){

		$produtonovo = $prod[$i];
		$quantidade = $qtd[$i];
		$valorNovo = $valor[$i];
		$valorNovo = str_replace(",", ".", $valorNovo);

		//	echo $produtonovo;

		$total = $quantidade * $valorNovo;
		$TotalGeral += $total;


		$insert = mysql_query("INSERT INTO entregas (cliente, id_cliente, produto, quantidade, valor, total, metodo, data) VALUES('$nomeCliente', '$cliente_id', '$produtonovo', '$quantidade', '$valorNovo', '$total', '$metodo', '$data')") or die(mysql_error());
		if($insert){
			$certo++;
		}

   echo '<tr>
	        <td>'.$quantidade.'</td>
	        <td>'.$produtonovo.'</td>
	        <td>R$'.$valorNovo.'</td>
	        <td>R$'.$total.',00</td>
         </tr>';
	}


?>
</table>
	<?php echo '<h1 align="center">Total: R$'.(float)$TotalGeral.',00</h1>'?>
</div>