<?php
include "config.php";?>
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
			<table border="1">
				<tr>
					<td style="font-weight:bold;font-size:20px">Nome</td>
					<td style="font-weight:bold;font-size:20px">CNPJ</td>
					<td style="font-weight:bold;font-size:20px">IE</td>
					<td style="font-weight:bold;font-size:20px">Endereço</td>
					<td style="font-weight:bold;font-size:20px">Telefone</td>
				</tr>
				<?php
					$query = mysql_query("SELECT * FROM clientes ORDER BY nome ASC");
					while($res = mysql_fetch_array($query)){
						echo '<tr>
					<td>'.$res['nome'].'</td>
					<td>'.$res['cnpj'].'</td>
					<td>'.$res['ie'].'</td>
					<td>'.$res['endereco'].'</td>
					<td>'.$res['telefone'].'</td>
				</tr>';
					}

				?>
			</table>

		</div>
<div class="clear"></div>
	</div>
</body>
</html>