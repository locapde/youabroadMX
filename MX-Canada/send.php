<?php

	$name = $_POST["name"];
	$lastname = $_POST["lastname"];
	$codepostal = $_POST["codepostal"];
	$email = $_POST["email"];
	$tel = $_POST["tel"];
	$provincia = $_POST["provincia"];
	$estudios = $_POST["estudios"];
	$situacion = $_POST["situacion"];
	$responsable = $_POST["responsable"];

	$utm_campaign = $_POST["utm_campaign"];
	$utm_source = $_POST["utm_source"];
	$utm_medium = $_POST["utm_medium"];
	$utm_term = $_POST["utm_term"];


/*
	$name = "Jordi";
	$lastname = "Capde";
	$codepostal = "08018";
	$email = "capde.jordi+youabroad@gmail.com";
	$tel = "666666666";
	$provincia = "ES-B";
	$estudios = "11";
	$situacion = "1";

	$utm_campaign = "esp";
	$utm_source = "scire_facebook_ads";
	$utm_medium = "cpc";
*/


	switch ($utm_source) {
	    case 'scire_google_ads':
	        $nota = "Google ADS";
	        break;
	    case 'scire_facebook_ads':
	        $nota = "Facebook ADS";
	        break;

	    case 'meta':
	        $nota = "Facebook ADS";
	        break;
	}


$_ZAP_ARRAY = array(
    "name" => $name,
	"lastname" => $lastname,
	"codepostal" => $codepostal,
	"email" => $email,
	"tel" => $tel,
	"provincia" => $provincia,
	"estudios" => $estudios,
	"situacion" => $situacion,
	"responsable" => $responsable,
	"utm_campaign" => $utm_campaign,
	"utm_source" => $utm_source,
	"utm_medium" => $utm_medium,
	"utm_term" => $utm_term
	);


  $fields_string = http_build_query($_ZAP_ARRAY);
  $ch = curl_init();
  curl_setopt($ch, CURLOPT_URL, "https://hook.eu2.make.com/wwd5ip560tsewjakjkopjxnbfqwfgc4z");
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $fields_string );
  $data = curl_exec($ch);
  curl_close($ch);

?>
