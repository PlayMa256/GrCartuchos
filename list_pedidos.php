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
<style type="text/css" media="print">
	body{
		background: #FFF;
	}
#menu{
	display: none;
}
#content{
	width: 100%;
}
button{
	display: none;
}
h1{
	text-align: center;
}
</style>
</head>
<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
<div id="content">
	<h1>LISTAGEM DE PEDIDOS CADSTRADOS</h1>
	<button onclick="window.print()">IMPRIMIR</button>
	<table border="1" cellspacing="0" width="100%">
		<tr>
			<td>Fornecedor</td>
			<td>Pedido</td>
			<td>total</td>
			<td>data</td>
		</tr>
		<?php
			$select = mysql_query("SELECT * FROM pedidos");
			while($res = mysql_fetch_array($select)){
				$fornecedor = $res['id_fornecedor'];
				$nf = mysql_query("SELECT nome FROM fornecedores WHERE id = '$fornecedor'");
				$result = mysql_fetch_array($nf);
				$nomeFornecedor = utf8_encode($result['nome']);
				echo '
							<tr>
			<td>'.$nomeFornecedor.'</td>
			<td>'.$res['descricao'].'</td>
			<td>'.$res['valor'].'</td>
			<td>'.format_data_Normal($res['data']).'</td>
		</tr>
				';
			}
		?>

	</table>
</div>
<div class="clear"></div>
	</div>
</body>
</html>
