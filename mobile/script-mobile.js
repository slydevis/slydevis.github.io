$(document).ready(function() {

	$("#portofolio").hide();
	$('#service').hide();
	$(".title").hide();
	$('.alert.alert-success').hide();
	$('.alert.alert-danger').hide();

	$("button:contains('Envoyer')").attr("disabled","disabled").addClass( 'ui-state-disabled' ); // Désactive Le bouton envoyer

	$(".cameleon1").stop().animate({opacity: 0},2000,function(){
		$(".title").stop().fadeIn(1);
		$(this).css({'background-image': "url('../img/cameleon1.png')"}).animate({opacity: 1},{duration:2000});
	});

	function validerFormulaire() {

		var champsNom = $('.Nom .glyphicon').hasClass('glyphicon-ok');
		var champsPrenom = $('.Prenom .glyphicon').hasClass('glyphicon-ok');
		var champsPhone = $('.Phone .glyphicon').hasClass('glyphicon-remove');
		var champsMail = $('.Mail .glyphicon').hasClass('glyphicon-ok');
		var champsMess = $('.Message .glyphicon').hasClass('glyphicon-ok');

		if(champsNom && champsPrenom && (!champsPhone) && champsMail && champsMess)
			$("button:contains('Envoyer')").removeAttr("disabled").removeClass( 'ui-state-disabled' );
		else {
			if(!$("button:contains('Envoyer')").attr("disabled","disabled").hasClass('ui-state-disabled')) 
				$("button:contains('Envoyer')").attr("disabled","disabled").addClass( 'ui-state-disabled' );
		}
	}

	$("#Nom").blur(function() {
		if($(this).val() == "") {
			$(this).parent(".form-group").removeClass('has-success has-warning');
			$(this).parent(".form-group").addClass('has-error has-feedback');
			$(".Nom .glyphicon").removeClass('glyphicon-ok glyphicon-warning')
	  		$(".Nom .glyphicon").addClass('glyphicon-remove');
	  		$(".Nom .help-block").html("<span class=\"help-block\">Le champs ne dois pas être vide</span>");
		}
		else {
			$(this).parent(".form-group").removeClass('has-error has-warning');
			$(this).parent(".form-group").addClass('has-success has-feedback');
			$(".Nom .glyphicon").removeClass('glyphicon-remove glyphicon-warning')
			$(".Nom .glyphicon").addClass("glyphicon-ok");
			$(".Nom .help-block").html("<span class=\"help-block\">Saisie correcte</span>");
		}
  		validerFormulaire();
	});

	$("#Prenom").blur(function() {
		if($(this).val() == "") {
			$(this).parent(".form-group").removeClass('has-success has-warning');
			$(this).parent(".form-group").addClass('has-error has-feedback');
			$(".Prenom .glyphicon").removeClass('glyphicon-ok glyphicon-warning')
	  		$(".Prenom .glyphicon").addClass('glyphicon-remove');
	  		$(".Prenom .help-block").html("<span class=\"help-block\">Le champs ne dois pas être vide</span>");
		}
		else {
			$(this).parent(".form-group").removeClass('has-error has-warning');
			$(this).parent(".form-group").addClass('has-success has-feedback');
			$(".Prenom .glyphicon").removeClass('glyphicon-remove glyphicon-warning')
			$(".Prenom .glyphicon").addClass("glyphicon-ok");
			$(".Prenom .help-block").html("<span class=\"help-block\">Saisie correcte</span>");
		}
  		validerFormulaire();
	});

	$("#Phone").blur(function() {
		if((!$(this).val().match("^0[1-68]([-. ]?[0-9]{2}){4}$"))) {
			$(this).parent(".form-group").removeClass('has-success has-warning');
			$(this).parent(".form-group").addClass('has-error has-feedback');
			$(".Phone .glyphicon").removeClass('glyphicon-ok glyphicon-warning')
	  		$(".Phone .glyphicon").addClass('glyphicon-remove');
	  		$(".Phone .help-block").html("<span class=\"help-block\">Le numéro de téléphone dois être valide</span>");
		}
		else {
			$(this).parent(".form-group").removeClass('has-error has-warning');
			$(this).parent(".form-group").addClass('has-success has-feedback');
			$(".Phone .glyphicon").removeClass('glyphicon-remove glyphicon-warning')
			$(".Phone .glyphicon").addClass("glyphicon-ok");
			$(".Phone .help-block").html("<span class=\"help-block\">Saisie correcte</span>");
		}
  		validerFormulaire();
	});

	$("#Mail").blur(function() {
		
		if((!$(this).val().match("^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$")) || $(this).val() == '') {
			$(this).parent(".form-group").removeClass('has-success has-warning');
			$(this).parent(".form-group").addClass('has-error has-feedback');
			$(".Mail .glyphicon").removeClass('glyphicon-ok glyphicon-warning')
	  		$(".Mail .glyphicon").addClass('glyphicon-remove');
	  		$(".Mail .help-block").html("<span class=\"help-block\">L'adresse email dois être valide</span>");
		}
		else {
			$(this).parent(".form-group").removeClass('has-error has-warning');
			$(this).parent(".form-group").addClass('has-success has-feedback');
			$(".Mail .glyphicon").removeClass('glyphicon-remove glyphicon-warning')
			$(".Mail .glyphicon").addClass("glyphicon-ok");
			$(".Mail .help-block").html("<span class=\"help-block\">Saisie correcte</span>");
		}
  		validerFormulaire();
	});

	$("#Message").blur(function() {
		if($(this).val() == "") {
			$(this).parent(".form-group").removeClass('has-success has-warning');
			$(this).parent(".form-group").addClass('has-error has-feedback');
			$(".Message .glyphicon").removeClass('glyphicon-ok glyphicon-warning')
	  		$(".Message .glyphicon").addClass('glyphicon-remove');
	  		$(".Message .help-block").html("<span class=\"help-block\">Le champs ne dois pas être vide</span>");
		}
		else {
			$(this).parent(".form-group").removeClass('has-error has-warning');
			$(this).parent(".form-group").addClass('has-success has-feedback');
			$(".Message .glyphicon").removeClass('glyphicon-remove glyphicon-warning')
			$(".Message .glyphicon").addClass("glyphicon-ok");
			$(".Message .help-block").html("<span class=\"help-block\">Saisie correcte</span>");
		}
  		validerFormulaire();
	});
 	
 	function slide(obj, sens) {
 		var object = $(obj);
 		var toPorto = $('#portofolio');
 		$(obj).show();
 		if(sens) {
 			$(obj).animate({"left" : "-=1550px"}, "slow");
 		}
 		else {
 			$(obj).animate({"left": "+=1550px"}, "slow");
 			$(obj).hide(1);
 		}
 	}

	var sensPorto = true;
 	$('#portofolio-menu').click(function() {
 		if(!sensService) {
 			$('#service').hide();
 			slide('#service', sensService);
 			sensService = true;
 		}
 		slide('#portofolio', sensPorto);
		sensPorto = (!sensPorto);
 		return false;
 	});

 	var sensService = true;
 	$('#service-menu').click(function() {
 		if(!sensPorto) {
 			$('#portofolio').hide();
 			slide('#portofolio', sensPorto);
 			sensPorto = true;
 		}
 		slide('#service', sensService);
 		sensService = (!sensService);
 		return false;
 	});

 	$('#acceuil, a[href=#contact]').click(function() {
 		$('.title').show();
 		if(!sensPorto) {
 			$('#portofolio').hide();
 			slide('#portofolio', sensPorto);
 			sensPorto = true;
 		}
 		if(!sensService) {
 			$('#service').hide();
 			slide('#service', sensService);
 			sensService = true;
 		}
 		return false;
 	});

	$('ul.navbar-nav li a').click(function () {
		if(!$(this).parent('li.active').hasClass("active")) {
			$('ul.navbar-nav li.active').removeClass('active');
			$(this).parent('li').addClass('active');
		}
		else {
			$(this).parent('li.active').removeClass('active');
			$('#acceuil').parent('li').addClass('active');
		}
		return false;
	});

 	
 	$('.scrollTo').click( function() { // Au clic sur un élément
      var page = $(this).attr('href'); // Page cible
      var speed = 750; // Durée de l'animation (en ms)
      $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go

      return false;
    });

    $('form').submit(function() {
		$("#Nom").attr("disabled","disabled");
		$("#Prenom").attr("disabled","disabled");
		$("#Phone").attr("disabled","disabled");
		$("#Mail").attr("disabled","disabled");
		$("#Message").attr("disabled","disabled");
		$.post($(this).attr('action'),$(this).serialize(),function(texte){
			$(':button:contains(\'Envoyer\')').fadeOut(200);
		});
		
		$.ajax({
	        type: $(this).attr("method"),
	        url: $(this).attr("action"),
	        data: $(this).serialize(),
	        success: OnSuccess,
			error: OnError
		});

		function OnSuccess(result) {
			var message = result.message;
			var resultat = result.result;
			$('form').fadeOut('slow');
			if(resultat) {
				$('.alert.alert-success').fadeIn('slow');
				$('a[href=#contact]').fadeOut('slow');
				$('.alert.alert-success').html(message);
			}
			else {
				$('.alert.alert-danger').fadeIn('slow');
				$('.alert.alert-danger').html(message);
			}
		}

		function OnError(result) {
			$('form').fadeOut('slow');
			$('.alert.alert-danger').fadeIn('slow');
			$('.alert.alert-danger').html("Une erreur c'est produite veuillez actualiser la page et recommencer");
		}
		
		return false;
	})
});