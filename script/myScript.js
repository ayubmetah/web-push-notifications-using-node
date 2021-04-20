$(function () {
            $("#twitter-api").dialog({
                modal: true,
                autoOpen: false,
                title: "jQuery Dialog",
                width: 300,
                height: 150
            });
            $("#twitter-api-btn").click(function () {
                $('#twitter-api').dialog('open');
            });
        });

var password = "secretKey";
var authenticate = document.getElementbyId("token").value;
debugger;
if(authenticate == password){
	$(document).ready(function(){
	alert("Password required to view this data");
   $('#private').hide();
   document.getElementById("twitter-api-btn").innerHTML="Show";   
   
   $('#twitter-api-btn').click(function() {
	   $(this).text(function(i,v){
		   $('#private').toggle();
		   return v === 'HIDE' ? 'SHOW' : 'HIDE'
	   })	 
   });
});
	
}else{
	window.alert("Password required to view this data");
}