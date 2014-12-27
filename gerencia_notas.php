<?php
include_once "config.php";
include_once "backupRoutine.php";
include_once "diffData.function.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<link rel="stylesheet" href="css/style.css" />
	<title></title>

</head>

<body>
	<div id="box">
	<?php
	include "menu.php";?>
	
	
		<div id="content">
            <form action="" method="post">
                <fieldset>
                        <span>Selecione Cliente</span>
                    <select name="cliente" id="">
                        <option selected="selected" value="">Selecione um cliente</option>
                        <?php
                            $sql = mysql_query("SELECT * FROM clientes");
                            while($res = mysql_fetch_array($sql)){
                                echo '<option value="'.$res['id'].'">'.$res['nome'].'</option>';
                            }
                        ?>
                    </select>
                </fieldset>
                <input type="hidden" name="acao" value="procurar"/>
                <input type="submit" value="Procurar"/>
            </form>
            <?php if(isset($_POST['acao']) && $_POST['acao'] == 'procurar'){
                    $id_cliente = (int)$_POST['cliente'];
                    $sql_recupera_nome = mysql_query("SELECT nome FROM clientes WHERE id = '$id_cliente'");
                    $resultado = mysql_fetch_array($sql_recupera_nome);
                    $nome_cliente = $resultado['nome'];

                    echo '<table>';
                        echo '<tr>';
                            echo '<td>Quantidade</td>';
                            echo '<td>Produto</td>';
                            echo '<td>Valor</td>';
                            echo '<td>Total</td>';
                            echo '<td>Data</td>';
                        echo '</tr>';

                    $sql2 = mysql_query("SELECT * FROM notas WHERE id_cliente = '$id_cliente'");
                    while($result = mysql_fetch_array($sql2)){

                    }
            }?>
		</div>
<div class="clear"></div>
	</div>
</body>
</html>