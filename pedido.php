<?php
require_once "config.php";
include_once "funcoes/format_data.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
		<link rel="stylesheet" href="css/style.css" />
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<title></title>
		<script src="js/jquery.js"></script>
	<script src="js/mask.js" type="text/javascript"></script>
	<script type="text/javascript" src="tinymce/tinymce.min.js"></script>
<script type="text/javascript">
tinymce.init({
    selector: "textarea"
 });
</script>


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
			<span>Fornecedor</span>
			<select name="fornecedor" id="">
				<?php
					$select = mysql_query("SELECT * FROM fornecedores ORDER BY nome ASC");
					while($res = mysql_fetch_array($select)){
						echo '<option value="'.$res['id'] .'">'.$res['nome'].'</option>';
					}
				?>
			</select>
		</label>
		<label>
			<span>Descricao</span>
			<textarea name="descricao" id="" cols="30" rows="10"></textarea>
		</label>
		<label>
			<span>Valor</span>
			<input type="text" name="valor" />
		</label>

		<label>
			<span>Data(dd-mm-aaaa)</span>
			<input type="text" name="data" class="data" />
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


	$fornecedor = trim($_POST['fornecedor']);



	$valor = trim($_POST['valor']);
	$descricao = trim($_POST['descricao']);
	$data = $_POST['data'];
	$data = format_data($data);

	$insert = mysql_query("INSERT INTO pedidos (id_fornecedor, descricao, valor, data) VALUES('$fornecedor', '$descricao', '$valor', '$data')") or die(mysql_error());
	if($insert){
		echo '<script>alert("inserido com sucesso");</script>';
	}else{
		echo '<script>alert("erro ao inserir");</script>';

	}
}
	

?>