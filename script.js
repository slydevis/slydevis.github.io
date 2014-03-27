$(document).ready(function() {
	$("#test").hide();
     	var sens = true;
 	$("#test2").click(function(){
 		$("#test").show();
 		if(sens)
 		{
 			console.log(sens);
 			sens = false;
			$("#test").animate({"left": "-=1550px"}, "slow");
			/*$("#test").animate({"top" :"+= 50px"}, "slow")*/
 		}
		else
		{
			console.log(sens);
			sens = true;
			$("#test").animate({"left": "+=1550px"}, "slow");
			$("#test").hide(1);
		}
	});
     $('a[href=#top]').click(function(){
          $('html, body').animate({scrollTop:0}, 'slow');
          return false;
     });
});