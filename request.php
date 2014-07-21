<?php
include_once("config.php");
$idconta = $_POST['idConta'];

$valor = 0;
$mysql_query = mysql_query("SELECT * FROM vendas WHERE id = '$idconta'") or die(mysql_error());
while($res = mysql_fetch_array($mysql_query)){
	$valor += $res['total'];
}

echo $valor;



