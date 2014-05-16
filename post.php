<?php

function verifMail($mail) {
	if(preg_match("#^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$#", $mail) && (!empty($mail)))
		return true;
	else 
		return false;
}

function verifPhone($phone) {
    if (preg_match("#^0[1-68]([-. ]?[0-9]{2}){4}$#", $phone) || empty($phone))
    	return true;
    else
        return false;
}

$message = "";
$nom = "";
$prenom = "";
$phone = "";
$mail = "";
$message = "";

if (isset($_POST["nom"])) {
	$nom = htmlentities($_POST["nom"]);
}

if (isset($_POST["prenom"])) {
	$prenom = htmlentities($_POST["prenom"]);
}

if(isset($_POST["phone"])) {
	$phone = htmlentities($_POST["phone"]);
}

if(isset($_POST['mail'])) {
	$mail = htmlentities($_POST["mail"]);
}

if(isset($_POST['message'])) {
	$message = htmlentities($_POST['message']);
}

$objet = new StdClass();
if ((!empty($nom)) && (!empty($prenom)) && verifPhone($phone) && (!empty($message)) && verifMail($mail)) {
	$objet->message
		= "Votre message à bien été transmis.";
	$objet->resultat = true;
} else {
	$objet->message = "Game Over votre ordinateur s'auto détruira dans 5sec";
	$objet->resultat = false;
}

$mailAdmin = 'bmichon@free.fr'; // Déclaration de l'adresse de destination.
if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mailAdmin)) // On filtre les serveurs qui rencontrent des bogues.
{
	$passage_ligne = "\r\n";
}
else
{
	$passage_ligne = "\n";
}

//=====Déclaration des messages au format texte et au format HTML.
$message_html = "<html><head></head><body>Vous avez un message de ".$nom." ".$prenom." :<br/>".$messages."<br/>---------------------<br/><br/>Voici les coordonées de cet utilisateur :<br/>Téléphone :".$phone."<br/>Mail : ".$mail;
//==========
 
//=====Création de la boundary
$boundary = "-----=".md5(rand());
//==========
 
//=====Définition du sujet.
$sujet = "Message de ".$nom." ".$prenom;
//=========
 
//=====Création du header de l'e-mail.
$header = "From: Message de \"".$nom." ".$prenom."\"<".$mail.">".$passage_ligne;
$header.= "Reply-to: Message de \"".$nom." ".$prenom."\" <".$mail.">".$passage_ligne;
$header.= "MIME-Version: 1.0".$passage_ligne;
$header.= "Content-Type: multipart/alternative;".$passage_ligne." boundary=\"$boundary\"".$passage_ligne;
//==========
 
//=====Création du message.
$message = $passage_ligne."--".$boundary.$passage_ligne;
//=====Ajout du message au format HTML
$message.= "Content-Type: text/html; charset=\"utf-8\"".$passage_ligne;
$message.= "Content-Transfer-Encoding: 8bit".$passage_ligne;
$message.= $passage_ligne.$message_html.$passage_ligne;
//==========
$message.= $passage_ligne."--".$boundary."--".$passage_ligne;
//==========
 
//=====Envoi de l'e-mail.
mail($mailAdmin,$sujet,$message,$header);
//==========

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');

echo json_encode($objet);