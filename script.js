$(document).ready(function() {
	$("#test").hide();
	$(".title").hide();
	$(".cameleon1").stop().animate({opacity: 0},2000,function(){
		$(".title").stop().fadeIn(1);
		$(this).css({'background-image': "url('img/cameleon1.png')"}).animate({opacity: 1},{duration:2000});});
	
 	var sens = true;
 	$("#test2").click(function(){
 		$("#test").show();
 		if(sens)
 		{
 			console.log(sens);
 			sens = false;
			$("#test").animate({"left": "-=1550px"}, "slow");
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

 	$('.scrollTo').click( function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go

      return false;
    });
});