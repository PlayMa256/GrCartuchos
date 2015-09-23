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
		<?php include "menu.php";?>
		<div id="content">
			<h2>Gerenciar Produtos</h2>
			<table border="1" width="100%">
				<tr>
					<td>Nome</td>
					<td colspan="2">Acoes</td>
				</tr>
			
			<?php 
				$sql = mysql_query("SELECT * FROM produtos");
				while($res = mysql_fetch_array($sql)){
					$id = $res['id'];
					$nome = $res['nome'];
					echo "
						<tr>
							<td>$nome</td>
							<td><a href=\"editar_produto.php?id=$id\">Editar</a> <a href=\"?acao=apagar&id=$id\">Apagar </a></td>
						</tr>
					";
				}
			?>
			<?php 
				if(isset($_GET['acao']) && $_GET['acao'] == 'apagar'){
					$prod_id = $_GET['id'];
					$remove = mysql_query("DELETE FROM produtos WHERE id = '$prod_id'");
					if($remove){
						echo '<script>alert("Apagado com sucesso");location.href="gerenciar_produtos.php";</script>';
					}else{
						echo '<script>alert("Problema ao apagar");</script>';
					}
				}
			?>
			</table>
		</div>
		<div class="clear"></div>
	</div>
</body>
</html>