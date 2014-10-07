<?php
require_once "config.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
		<link rel="stylesheet" href="css/style.css" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title>Editar Clientes</title>
	<script src="js/jquery.js"></script>
	<script src="js/mask.js" type="text/javascript"></script>


</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	<div id="oi">

	</div>
		<div id="content">
	<h3>Editar Clientes</h3>
<form action="" method="post">
		<label>
			<span>Cliente</span>
			<input type="text" name="nome" />
		</label>
		
		<span>Selecione o tipo</span>
		<select id="tipo">
			<option >Selecione O tipo</option>
			<option value="fisica">Pessoa fisica</option>
			<option value="juridica">Pessoa Juridica</option>
		</select>
		<label>
			<span>EMAIL</span>
			<input type="text" name="email" />
		</label>
		<label>
			<span>Endereço</span>
			<input type="text" name="end" />
		</label>
		<label class="cnpjlabel">
			<span>CNPJ</span>
			<input type="text" name="cnpj" class="cnpj"/>
		</label>
		<label class="ielabel">
			<span>Inscrição estadual</span>
			<input type="text" name="ie" class="ie" />
		</label>
		<label>
			<span>Telefone</span>
			<input type="text" name="telefone" />
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
	$cliente = utf8_decode(trim($_POST['nome']));
	$end = trim($_POST['end']);
	$cnpj = trim($_POST['cnpj']);
	$ie = trim($_POST['ie']);
	$telefone = trim($_POST['telefone']);
	$email = trim($_POST['email']);
	

	$insert = mysql_query("INSERT INTO clientes (nome, endereco, email, cnpj, ie, telefone) VALUES('$cliente', '$end', '$email', '$cnpj', '$ie', '$telefone')") or die(mysql_error());
	if($insert){
		echo '<script>alert("inserido com sucesso");</script>';
	}else{
		echo '<script>alert("inserido com sucesso");</script>';

	}








}
	

?>