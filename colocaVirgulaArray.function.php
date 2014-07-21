<?php

function virgula($array){
			$arrayValores = array_map('mysql_real_escape_string', array_values($array));
			$valuesValores = implode(", ", $arrayValores);


			return $valuesValores;



}
