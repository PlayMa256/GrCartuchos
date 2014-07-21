<?php
require_once "config.php";
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
$(document).ready(function(){
	   	$(".cnpjlabel").hide();
      	$(".ielabel").hide();
       $(".cnpj").mask("99.999.999/9999-99");
       //$(".ie").mask("999.999.999.999");


function displayVals(){
	      var campo = $("#tipo").val();
	      if(campo == 'juridica'){
	      	$(".cnpjlabel").show();
	      	$(".ielabel").show();
	      }else{
	      	$(".cnpjlabel").hide();
      		$(".ielabel").hide();
	      }
}

$( "#tipo" ).change( displayVals );


})


</script>

</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	<div id="oi">

	</div>
		<div id="content">
	<h3>Cadastrar cliente</h3>
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
	

	$insert = mysql_query("INSERT INTO clientes (nome, endereco, cnpj, ie, telefone) VALUES('$cliente', '$end', '$cnpj', '$ie', '$telefone')") or die(mysql_error());
	if($insert){
		echo '<script>alert("inserido com sucesso");</script>';
	}else{
		echo '<script>alert("inserido com sucesso");</script>';

	}








}
	

?>