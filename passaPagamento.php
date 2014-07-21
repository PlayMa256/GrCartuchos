<?php
require_once("config.php");

	$conta = $_POST['id_conta'];
	$valor = $_POST['valor'];
	$total = $_POST['total'];
	$subtotal = 0;

	if($valor != $total){
		$subtotal = $total - $valor;
		$insert = mysql_query("UPDATE vendas SET total = '$subtotal' WHERE id = '$conta'") or die(mysql_error());
		if($insert){
			echo '<script>alert("pagamento de uma parte efetuado com sucesso");location.href="AdicionarPagamento.php";</script>';
		}

	}else if($valor == $total){
		$insert = mysql_query("UPDATE vendas SET status = 0 AND WHERE id='$conta'") or die(mysql_error());
		if($insert){
			echo '<script>alert("pagamento efetuado com sucesso");location.href="AdicionarPagamento.php";</script>';
		}
	}

?>