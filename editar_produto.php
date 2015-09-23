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

<script>
jQuery(function($){
		$(".data").mask("99-99-9999");
});
</script>

</head>
<body>
	<div id="box">
	<?php include "menu.php";?>
	
	
		<div id="content">
	<form action="" method="post">
		<label>
			<span>Fornecedor</span>
			<select name="fornecedor" id="">
			<?php
				$procura = mysql_query("SELECT * FROM produtos WHERE id = '$id_produto'");
				while($resultado = mysql_fetch_array($procura)){
					$id_fornecedor = $resultado['fornecedor'];
					$nome = $resultado['nome'];
					$data = date("d-m-Y", strtotime($resultado['data']));

				
			?>
				<?php
					$id_produto = (isset($_GET['id'])) ? $_GET['id'] : null;
					$select = mysql_query("SELECT * FROM fornecedores ORDER BY nome ASC WHERE id = '$id_fornecedor'");
					while($res = mysql_fetch_array($select)){
						if($res['id'] == $id_produto){
							echo '<option value="'.utf8_encode($res['id']).'" selected="selected">'.utf8_encode($res['nome']).'</option>';	
						}
						echo '<option value="'.utf8_encode($res['id']).'">'.utf8_encode($res['nome']).'</option>';
					}
				?>
			</select>
		</label>

		<label>
			<span>Produto</span>
			<input type="text" name="produto" value="<?php echo $nome;?>" />
		</label>
		<label>
			<span>Data(dd-mm-aaaa)</span>
			<input type="text" name="data" class="data" value="<?php echo $data;?>" />
		</label>

		<input type="submit" value="Enviar" />
		<input type="hidden" name="acao" value="enviar" />
	</form>
		</div>
	<div class="clear"></div>
	</div>
	<?php
		}
	?>
</body>
</html>
<?php if(isset($_POST['acao']) && $_POST['acao'] == 'enviar'){
	$fornecedor = trim($_POST['fornecedor']);
	$prod = $_POST['produto'];
	$data = trim($_POST['data']);
	$data = format_data($data);

	$insert = mysql_query("INSERT INTO produtos (nome, fornecedor, data) VALUES('$prod','$fornecedor', '$data')");

	if($insert){
		echo '<script>alert("atualizado com sucesso");</script>';
	}else{
		echo '<script>alert("problema ao atualizar");</script>';

	}
}
	

?>