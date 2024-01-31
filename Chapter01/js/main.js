<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width">
            <title></title>

        <!--put your external stylesheet links here-->
        <link rel="stylesheet" href="css/style.css">
        <!--[if IE<9]>
            <link rel="stylesheet" href="css/style.ie.css">
        <![endif]-->
        
        <!--you can also place internal styles here
        place these within <style> tags-->  
        
		/* Stylesheet by Nicholas A. Sapp, 2024 */
		
		<style>
			#mydiv {
				background-color: red;
				width: 80%;
				margin: 0 auto;
				height: 100px;
			}
		</style>
				
		
    </head>
    <body>
        
		Hello World!
		
		<!--put your initial page content here-->
        
        <div id="mydiv">
			Hello World!
		</div>
		
		<script>
			var mydiv = document.getElementById("mydiv");
			mydiv.addEventListener("click", function(){
				alert("Hello World!");
			});
		</script>

        <!--put your external script links here-->
        <script type="text/javascript" src="js/main.js"></script>
    </body>
</html>