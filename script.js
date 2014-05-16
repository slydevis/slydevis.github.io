// TODO : resoudre le formulaire 

$(document).ready(function() {

	$("#portofolio").hide();
	$('#service').hide();
	$(".title").hide();
	$('.alert.alert-success').hide();
	$('.alert.alert-danger').hide();

	$("button:contains('Envoyer')").attr("disabled","disabled").addClass( 'ui-state-disabled' ); // Désactive Le bouton envoyer

	// Effet fondu du nouvelle background

	$(".cameleon1").stop().animate({opacity: 0},2000,function(){
		$(".title").stop().fadeIn(1);

		// La fonction css() permet de modifier le css d'un objet
		
		$(this).css({'background-image': "url('img/cameleon1.png')"}).animate({opacity: 1},{duration:2000});
	});

	// Fonction qui permet de vérifier tous le champs du formulaire et d'activé le bouton envoyer qui si c'est tous bon

	function validerFormulaire() {

		var champsNom = $('.Nom .glyphicon').hasClass('glyphicon-ok');
		var champsPrenom = $('.Prenom .glyphicon').hasClass('glyphicon-ok');
		var champsPhone = $('.Phone .glyphicon').hasClass('glyphicon-remove');
		var champsMail = $('.Mail .glyphicon').hasClass('glyphicon-ok');
		var champsMess = $('.Message .glyphicon').hasClass('glyphicon-ok');

		// La fonction removeAttr permet de rajouté un attribut à une balise
		// La fonction removeClass permet d'enlever une class à une balise

		if(champsNom && champsPrenom && (!champsPhone) && champsMail && champsMess)
			$("button:contains('Envoyer')").removeAttr("disabled").removeClass( 'ui-state-disabled' );
		else {

			// La fonction hasClass permet de vérifier si la balise possède bien la class
			// La fonction addClass permet d'ajouté une classe à l'élèment sélectionné 

			if(!$("button:contains('Envoyer')").attr("disabled","disabled").hasClass('ui-state-disabled')) 
				$("button:contains('Envoyer')").attr("disabled","disabled").addClass( 'ui-state-disabled' );
		}
	}

	//  Vérifie le champs Nom lorsqu'on pert le 'focus'

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

	//  Vérifie le champs Prénom lorsqu'on pert le 'focus'

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

	//  Vérifie le champs Téléphone lorsqu'on pert le 'focus'

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

	//  Vérifie le champs Email lorsqu'on pert le 'focus'

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

	//  Vérifie le champs Message lorsqu'on pert le 'focus'

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
 	
 	// Cette fonction permet de faire apparaitre/disparaitre une partie (class=part)
 	
 	function slide(obj, sens) {
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

	// Lorsqu'on clique sur le bouton Portofolio alors on apparait la partie et on disparait la partie qui peut être présente

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

	// Lorsqu'on clique sur le bouton Service alors on apparait la partie et on disparait la partie qui peut être présente

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

	// Lorsqu'on clique sur un bouton Contact alors on cache tous les parties présente sur la page

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

 	// Lorsqu'on clique sur un bouton du menu alors on gère quelle est le bouton active (pour savoir où l'utilisateur ce trouve)

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

 	// Permet le passage d'une ancre à une autre de façon fluide

 	$('.scrollTo').click( function() {

 		// La fonction attr() permet de récupérer le contenu de la valeur de href dans ce cas là
    	
    	var page = $(this).attr('href');
    	
    	// La fonction offset permet de recupérer la position de l'objet possdans la class srollTo

      	$('html, body').animate( { scrollTop: $(page).offset().top }, "slow");
      	return false;
    });



 	// Lorsqu'on envoie le formulaire 

	$("button:contains('Envoyer')").click(function() {
		$("#Nom").attr("disabled","disabled");
		$("#Prenom").attr("disabled","disabled");
		$("#Phone").attr("disabled","disabled");
		$("#Mail").attr("disabled","disabled");
		$("#Message").attr("disabled","disabled");		
	});

	$("#formulaire").submit(function() {
	$.ajax({
		type: $(this).attr("method"), 
		data: $(this).serialize(), 
		url: $(this).attr('action'),
		success: function(data) {
			var message = data.message;
			var resultat = data.resultat;
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
		},
		error: function(data) {
			$('form').fadeOut('slow');
	 		$('.alert.alert-danger').fadeIn('slow');
		 	$('.alert.alert-danger').html("Une erreur c'est produite veuillez actualiser la page et recommencer");
		}
	});
		return false;
	});
});