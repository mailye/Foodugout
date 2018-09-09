$(function(){
	var ouvert = false;
		$('#burger').on('click', function(){
			
			if(ouvert == false){
			$('#navsecond').addClass('active');
				ouvert=true;
				//il faut mettre la variable ouvert en true pour dire que c'est ouvert
			}else{
			$('#navsecond').removeClass('active');
			ouvert=false;
			}

		});
});
	


