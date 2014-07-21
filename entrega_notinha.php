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
<script type="text/javascript">
function AddCampo(id){
         el = document.getElementById(id);
         el.innerHTML += '<br /><label><span>Quantidade</span><input type="text" name="quantidade[]" /></label><label><span>Produto</span><input type="text" name="produto[]" /></label><label><span>Valor</span><input type="text" name="valor[]" /></label><br />';
  }

</script>

</head>
<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
		<div id="content">
	<form action="print_entrega.php" method="post">
		<legend style="font-size:24px;text-align:center;font-weight:bold;margin-bottom:10px;">Cadastrar Entregas</legend>
		<label>
			<span>Cliente</span>
			<select name="cliente" id="">
				<?php
					$select = mysql_query("SELECT * FROM clientes ORDER BY nome ASC");
					while($res = mysql_fetch_array($select)){
						echo '<option value="'.utf8_encode($res['id']).'">'.utf8_encode($res['nome']).'</option>';
					}
				?>
			</select>
		</label>

   <a href="#"  onclick="AddCampo('img-extra')">Add Campo</a>
		<label>
			<span>Quantidade</span>
			<input type="text" name="quantidade[]" />
		</label>
		<label>
			<span>Produto</span>
			<input type="text" name="produto[]" />
		</label>
		<label>
			<span>Valor</span>
			<input type="text" name="valor[]" />
		</label>
		<div id="img-extra"></div>
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
