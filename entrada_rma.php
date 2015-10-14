<?php
require_once "config.php";
include_once "funcoes/format_data.php";
include_once "funcoes.php";
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
         <?php $possivelecho = "<label><span>Produto</span><select name=\"produto[]\">";
					$possivelecho .= "<option value=\"\" selected> Selecione um produto</option>";
					$procura = mysql_query("SELECT * FROM produtos ORDER BY nome ASC");
					while($resultado = mysql_fetch_array($procura)){
						$possivelecho .= '<option value="'.$resultado['id'].'">'.$resultado['nome'].'</option>';

					}
					$possivelecho .= "</select></label>";
					echo "k='$possivelecho';";
				?>
			
		
         el.innerHTML += '<br /><label><span>Quantidade</span><input type="text" name="quantidade[]" /></label>'+k+'<label for=""><span>Valor</span><input type="text" name="valor[]" id="" /></label>';
  }

</script>

</head>
<body>
	<div id="box">
		<?php
		include "menu.php";?>
		<div id="content">
			<form action="" method="post">
				<legend>Entrada de rma</legend>
				<label for="">
					<span>Fornecedor</span>
					<select name="fornecedor" id="">
						<option value="" selected>Selecione um fornecedor</option>
						<?php
							$procura_fornecedor = mysql_query("SELECT * FROM fornecedores");
							while($resultados = mysql_fetch_array($procura_fornecedor)){
								echo '<option value="'.$resultados['id'].'">'.$resultados['nome'].'</option>';
							}

						?>
					</select>
				</label>
				<label for="">
					<span>Nota fiscal</span>
					<input type="text" name="notafiscal" id="" />
				</label>
				<br/>
	   			<a href="#"  onclick="AddCampo('img-extra')">Add Campo</a>
				<label>
					<span>Quantidade</span>
					<input type="text" name="quantidade[]" />
				</label>
				<label>
					<span>Produto</span>

					<select name="produto[]">
						<option value="" selected> Selecione um produto</option>
						<?php 
							$procura = mysql_query("SELECT * FROM produtos ORDER BY nome ASC");
							while($resultado = mysql_fetch_array($procura)){
								echo '<option value="'.$resultado['id'].'">'.$resultado['nome'].'</option>';
							}
							?>
					</select>
				</label>
				<label for="">
					<span>Valor</span>
					<input type="text" name="valor[]" id="" />
				</label>
				<div id="img-extra"></div>
			
				<input type="submit" value="Enviar" />
				<input type="hidden" name="acao" value="enviar" />
			</form>
		</div>
		<div class="clear"></div>
	</div>
</body>
</html>
<?php if(isset($_POST['acao']) && $_POST['acao'] == 'enviar'){
	date_default_timezone_set('America/Sao_Paulo');
	$certo = 0;
	$fornecedor = $_POST['fornecedor'];
	$nota_fiscal = $_POST['notafiscal'];
	$produtos = $_POST['produto'];
	$quantidades = $_POST['quantidade'];
	$valores = $_POST['valor'];
	$quantidadeValores = count($produtos);
	$valor = 0;
	for($i=0;$i<count($produtos);$i++){
		$produto = $produtos[$i];
		$quantidade = $quantidades[$i];
		$valor = $valores[$i];
		$data = date("Y-m-d");


		$procura_existe = mysql_query("SELECT * FROM estoque WHERE id_produto = '$produto'");
		$quantidade_existente = mysql_num_rows($procura_existe);
		$insere = false;
		if($quantidade_existente == 0){
			$insere = mysql_query("INSERT INTO estoque (id_produto, quantidade, inserted_at) VALUES ('$produto', '$quantidade', '$data')");
		}
		$movimentacao = mysql_query("INSERT INTO movimentacao (id_produto, id_fornecedor, numero_nota, quantidade, valor, data, tipo) VALUES ('$produto', '$fornecedor', '$nota_fiscal', '$quantidade','$valor', '$data', 3)") or die(mysql_error());
			if($insere || $movimentacao){
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