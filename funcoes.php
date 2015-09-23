<?php

function retornaNomeProduto($id_produto){
	$sql = mysql_query("SELECT nome FROM produtos where id = '$id_produto'");
	while ($res=mysql_fetch_array($sql)) {
		$nome = $res['nome'];
		return $nome;
	}
}
