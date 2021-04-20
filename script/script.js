var beepThree = $("#play-fx-sound")[0];
$("#fx-sound li a").mouseenter(function() {
		beepThree.pause();
		beepThree.play();		
	});	
$(document).ready(function(){
	document.getElementById("twitter-api-btn").innerHTML = "Show";
	$('.authVerify').hide();
	$('#private').hide();
	console.log("This is an external script file -- working fine!!");	
	
	$('#toggleAuthVerify').mouseover(function() {
		$('.authVerify').toggle();
	});		
	$('#twitter-api-btn').click(function() {
		
		 var apiPasswd = "secretKey"
		 // $('.authVerify').toggle();
		if (document.getElementById("token").value == apiPasswd){	   
			   $(this).text(function(i,v){
				   $('#private').toggle();
				   $('.authVerify').hide();
				   return v === 'HIDE' ? 'SHOW' : 'HIDE'
				 })		   
			setTimeout(function(){			 
				document.getElementById("token").value = "";
				$('#private').hide();
				document.getElementById("twitter-api-btn").innerHTML = "Show";						
			},10000);		 
		}else{
			var snd = new Audio('audio/xp-alert.mp3');		 
			snd.play();				
			window.alert("You need a valid password to access this resorce.");
			document.getElementById("token").value = "";
			document.getElementById("imgElement").src = "images/caution-red.jpg";
			$('.authVerify').show();	
			// document.getElementById("authReply").innerHTML="Sorry! You are NOT allowed to access this resource without a valid password.";
			setTimeout(function(){				
				$('#private').hide();								
				document.getElementById("imgElement").src = "images/twitter-dark.png";
				document.getElementById("token").value = "";				
				$('.authVerify').hide();
				// window.location.href="index.html";
				// var snd = new Audio('audio/Security-level-3.m4a');
				// snd.play();
				},9000);		 
		}
	});	   	   	   
});