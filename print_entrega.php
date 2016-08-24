<?php include_once "config.php";
include_once "funcoes.php";
error_reporting(0);
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
	//window.print();
	
</script>
<body>
	<?php
		include_once("header_print_entrega.php");
	?>
	<br />
	
	<div style="clear:both"></div>
<div id="box">
		<?php 
			$cliente_id = trim($_POST['cliente']);
			$pegaNomeCliente = mysql_query("SELECT nome FROM clientes WHERE id = '$cliente_id'");
			$result = mysql_fetch_array($pegaNomeCliente);
			$nomeCliente = $result['nome'];

			$quantidade_inserida = count($_POST['produto']);
			$produtos = $_POST['produto'];
			$valor = $_POST['valor'];
			$quantidade = $_POST['quantidade'];
			$metodo = $_POST['op'];

			$data_entrega = date('Y-d-m');
			$data_vencimento = date('Y-d-m', strtotime("+30 days"));


			//implodes
			$produtoImplode = implode("|", $produtos);
			$quantidadeImplode = implode("|", $quantidade);
			$valorImplode = implode("|", $valor);
			$insercao = mysql_query("INSERT INTO entregas (id_cliente, produto, quantidade, valor, data_entrega, data_vencimento) VALUES ('$cliente_id', '$produtoImplode', '$quantidadeImplode', '$valorImplode', '$data_entrega', '$data_vencimento')") or die(mysql_error());
			$ultimo = mysql_insert_id();
			for($i = 0;$i<count($produtos);$i++){
				$totalll = 0;
				$Produto = retornaNomeProduto($produtos[$i]);
				$Valor = $valor[$i];
				$Quantidade = $quantidade[$i];
				$totalll += $Valor*$Quantidade;

				$insert = mysql_query("INSERT INTO vendas (cliente, id_cliente, produto, quantidade, valor, total, metodo, data) 
					                                VALUES('$nomeCliente', '$cliente_id', '$Produto', '$Quantidade', '$Valor', '$totalll', '$metodo', CURDATE())") or die(mysql_error());
				$movimentacao = mysql_query("INSERT INTO movimentacao (id_produto, quantidade, data, valor, tipo) VALUES ('$Produto', '$Quantidade', '$data_entrega', '$Valor', '0')");

			}


	if($certo != count($produtos) && !$insercao){
		echo '<script>alert("inserido com sucesso");</script>';
	}else{
		echo '<script>alert("inserido com sucesso");</script>';

	}
?>
	<span style="float:left;">Nota n&uacute;mero: <?php echo $ultimo;?></span>
	<h2 style="text-align:center"><?php echo utf8_encode($nomeCliente); ?></h2>
	<table border="1" align="center" cellspacing="0">
		<tr>
			<td style="font-weight:bold;text-align:center;">Qtde</td>
			<td style="font-weight:bold;text-align:center;">Produto</td>
			<td style="font-weight:bold;text-align:center;">Valor</td>
			<td style="font-weight:bold;text-align:center;">Total</td>
		</tr>
			<?php
				$TotalGeral = 0;
				$dataInicial = $_POST['data'];
				
				for($i = 0;$i<$quantidade_inserida;$i++){
					$total = $valor[$i]*$quantidade[$i];
					echo "<tr>";
						echo '<td>'.$quantidade[$i].'</td>';
						echo '<td>'.retornaNomeProduto($produtos[$i]).'</td>';
						echo '<td>'.$valor[$i].'</td>';
						echo '<td>'.$total.',00</td>';
					echo "</tr>";
					$TotalGeral += $total;
					$total = 0;

				}
			?>
	</table>


	<?php 
		echo '<h1 id="total">Total: R$'.(float)$TotalGeral.',00</h1>';
		?>
		<!-- <h1 id="total">Total: 192,00</h1> -->

	<!-- 	<div id="dados">
	        <span>Dados para dep&oacute;sito</span>
	        <p><strong>Banco Ita&uacute;</strong></p>
	        <p><strong>Ag&ecirc;ncia</strong>: 3297</p>
	        <p><strong>Conta</strong>: 30183-4</p>
	        <p><strong>Titular</strong>: Renato Gon&ccedil;alves da Silva</p>
	    </div> -->
	</div>

</body>
</html>