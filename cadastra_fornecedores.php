<?php
require_once "config.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
		<link rel="stylesheet" href="css/style.css" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title></title>

</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
		<div id="content">
	<h3>Cadastrar Fornecedores</h3>
<form action="" method="post">
		<label>
			<span>Fornecedor</span>
			<input type="text" name="nome" />
		</label>

		<input type="submit" value="Cadastrar" />
		<input type="hidden" name="acao" value="enviar" />
	</form>
		</div>
<div class="clear"></div>
	</div>
</body>
</html>

<?php if(isset($_POST['acao']) && $_POST['acao'] == 'enviar'){
	$fornecedor = trim($_POST['nome']);
	

	$insert = mysql_query("INSERT INTO fornecedores (nome) VALUES('$fornecedor')") or die(mysql_error());
	if($insert){
		echo '<script>alert("inserido com sucesso");</script>';
	}else{
		echo '<script>alert("inserido com sucesso");</script>';

	}








}
	

?>