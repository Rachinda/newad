<script>	
var close1 = document.getElementById('Image1');
	setInterval(
		function(){ 
			if(close1){
				console.clear();
				close1.click();
				console.log("Click Close");
			}
		}, 1000);


	var next1 = document.getElementById('submit3');
	setInterval(
		function(){ 
			if(next1){
				console.clear();
				next1.click();
				console.log("Click Next");
			}
		}, 1000);
</script>
