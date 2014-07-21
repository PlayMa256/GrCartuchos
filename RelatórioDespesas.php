<?php
include_once "config.php";
include_once "backupRoutine.php";
include_once "diffData.function.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="css/style.css" />
	<title></title>

</head>

<body>
	<table>
		<tr>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	<?php
		date_default_timezone_set('America/Sao_Paulo');
		$mes = date('m');
		$ano = date('Y');
		$inicio = '31-'.$mes.'-'.$ano;
		$hoje = date('d-m-Y');

		$select = mysql_query("SELECT * FROM vendas WHERE data BETWEEN '$inicio' AND '$hoje'");
		while($res = mysql_fetch_array($select)){

		}

	?>

</table>


</body>
</html>