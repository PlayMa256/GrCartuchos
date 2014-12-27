    <style type="text/css">
        @page{
            margin: 0;
        }
        #wrapper{
            float:left;

            height: 100px;

        }
        #logo{
            float:left;
        }
        #logo > img{

            height: 100px;
            
        }
        #content{
            float:left;
            width:400px;
            height: 100px;
            text-align: center;

        }
        #content p{
            font-size:12pt;
            margin:1px auto 3px;
        }
        #content span{
            font-size:18pt;
        }
        #data{
            float: left;
            margin-left:10px;
        }
        #data p, #vencimento p{
            font-size: 15pt;
            vertical-align: 50%;

        }
        #vencimento{
            float:left;
            margin-left:30px;
        }
        #dados{
            float:left;
            margin-left:10px;
        }
        #dados p{
            margin:0;
        }

    </style>

</head>
<body>
	<div id="wrapper">
        <div id="logo">
           <img src="imagens/logo.png" height="100px" />
        </div>
        <!--<div style="clear: both"></div>-->
        <div id="content">
            <span class="titulo">Gr Cartuchos</span>
            <p>Rua Andr&eacute; Madsen, 377 - Vila Kallil - Cosm&oacute;polis</p>
            <p>Telefone: 3872-4872 | Celular: 9 9203-7662</p>
        </div>
        <div id="data">
        	<p><strong>Entrega</strong><br/><?php echo date("d-m-Y");?></p>
        	<!-- <p>N&ordm;: 12930129083</p> -->
        </div>
        <div id="vencimento">
        <p><strong>Vencimento</strong> <br/><?php
                echo date("d-m-Y", strtotime("+30 days"));
        ?></p>
        </div>
    </div>
    <div style="clear:both;"></div>
</body>
</html>