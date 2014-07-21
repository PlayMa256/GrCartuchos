<?php
require_once "config.php";
include_once("funcoes/format_data.php");

?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
		<link rel="stylesheet" href="css/style.css" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title></title>
		<script src="js/jquery.js"></script>
	<script src="js/mask.js" type="text/javascript"></script>

<script>
jQuery(function($){
		$(".data").mask("99-99-9999");
});
</script>
</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
<div id="content">
	<form action="" method="post">
		<label>

		</label>
		<label>
			<span>Valor</span>
			<input type="text" name="valor" />
		</label>

		<label>
			<span>Data(dd-mm-aaaa)</span>
			<input type="text" name="data" class="data" value="" />
		</label>
		<input type="submit" value="Enviar" />
		<input type="hidden" name="acao" value="enviar" />
	</form>
		</div>
<div class="clear"></div>
	</div>
</body>
</html>
<?php if(isset($_POST['acao']) && $_POST['acao'] == 'enviar'){
	$descricao = trim($_POST['descricao']);
	$valor = trim($_POST['valor']);
	$data = $_POST['data'];
	$data = format_data($data);

	$insert = mysql_query("INSERT INTO retiradas (descricao, valor, data) VALUES('$descricao', '$valor', '$data')") or die(mysql_error());
	if($insert){
		echo '<script>alert("inserido com sucesso");</script>';
	}else{
		echo '<script>alert("inserido com sucesso");</script>';

	}
}
	

?>