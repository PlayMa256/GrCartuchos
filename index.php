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
			<?php
			
					date_default_timezone_set('America/Sao_Paulo');

					$procura = mysql_query("SELECT * FROM backup ORDER BY id LIMIT 1") or die(mysql_error());
					$res = mysql_fetch_array($procura);
					$data = $res['data'];

					//echo $data;
					
					
					$dataInicio = $data;
					$dataFim = date('Y-m-d');
					$partes = explode('-',$dataInicio);
					$dataInicio = $partes[2].'-'.$partes[1].'-'.$partes[0];

					$timeInicial = strtotime($dataInicio);
					$timeFInal = strtotime($dataFim);
					$diferença = $timeFInal - $timeInicial;
					$dias = (int)floor($diferença / (60*60*24));

					//echo $dias;
								
				
					//echo $timestampFinal.'-'.$timestampInicial;
					


					if($dias >= 1){
						backup_db();
						$dataDeInserção = date("d-m-Y");
						$insert = mysql_query("INSERT INTO backup ('data') VALUES ('$dataDeInserção')");
						echo 'backup feito';
					}
			?>

		</div>
<div class="clear"></div>
	</div>
</body>
</html>