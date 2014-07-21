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
	<form action="" method="post">
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
		<select name="op" id="">
			<option value="aprazo">A Prazo</option>
			<option value="avista">A Vista</option>
		</select>
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



	$certo = 0;

	$cliente_id = trim($_POST['cliente']);
	$pegaNomeCliente = mysql_query("SELECT nome FROM clientes WHERE id = '$cliente_id'");
	$result = mysql_fetch_array($pegaNomeCliente);
	$nomeCliente = $result['nome'];


	$prod = $_POST['produto'];
	$qtd = $_POST['quantidade'];
	$valor = $_POST['valor'];
	$metodo = trim($_POST['op']);
	$data = trim($_POST['data']);
	$data = format_data($data);

	$quantidadeValores = count($_POST['produto']);

	//print_r ($_POST['produto']);

	for($i = 0; $i<$quantidadeValores;$i++){

		$produtonovo = $prod[$i];
		$quantidade = $qtd[$i];
		$valorNovo = $valor[$i];
		$valorNovo = str_replace(",", ".", $valorNovo);

		//	echo $produtonovo;

		$total = $quantidade * $valorNovo;


		$insert = mysql_query("INSERT INTO vendas (cliente, id_cliente, produto, quantidade, valor, total, metodo, data) VALUES('$nomeCliente', '$cliente_id', '$produtonovo', '$quantidade', '$valorNovo', '$total', '$metodo', '$data')") or die(mysql_error());
		if($insert){
			$certo++;
		}



	}

	if($certo == $quantidadeValores){
		echo '<script>alert("inserido com sucesso");</script>';
	}else{
		echo '<script>alert("inserido com sucesso");</script>';

	}








}
	

?>