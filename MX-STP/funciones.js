$(document).ready(function() {

//Select ESTUDIANTE mostramos input padre/madre/tutor
function toggleInput(selectId, inputClass) {
	document.getElementById(selectId).addEventListener('change', function() {
		const inputElement = document.querySelector('.' + inputClass);
		inputElement.style.display = this.value === 'Estudiante' ? 'block' : 'none';
	});
}

toggleInput('responsable', 'responsable');
toggleInput('responsable2', 'responsable2');


	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const utm_campaign = urlParams.get('utm_campaign');
	const utm_source = urlParams.get('utm_source');
	const utm_medium = urlParams.get('utm_medium');
	const utm_term = urlParams.get('utm_term');

	$("#utm_campaign").val(utm_campaign);
	$("#utm_source").val(utm_source);
	$("#utm_medium").val(utm_medium);
	$("#utm_term").val(utm_term);

	$("#campaign").val(utm_campaign);
	$("#source").val(utm_source);
	$("#medium").val(utm_medium);
	$("#term").val(utm_term);



    var the_terms = $("#the-terms");
    var the_terms2 = $("#the-terms2");

    the_terms.click(function() {
        if ($(this).is(":checked")) {
            $("#submitBtn").removeAttr("disabled");
        } else {
            $("#submitBtn").attr("disabled", "disabled");
        }
    });
    the_terms2.click(function() {
        if ($(this).is(":checked")) {
            $("#submitBtn2").removeAttr("disabled");
            console.log("SUBMIT 2");
        } else {
            $("#submitBtn2").attr("disabled", "disabled");
        }
    });
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-200px";
  }
}


(function() {
    $(".boton_envio").click(function() {
        var name = $(".nombre").val();
        lastname = $(".apellidos").val();
        codepostal = $(".cp").val();
        email = $(".email").val();
        validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        tel = $(".telefono").val();
        provincia = $(".provincia").val();
        estudios = $(".estudios").val();
        situacion = $(".situacion").val();
				responsable = $(".responsable").val();
        utm_campaign = $("#utm_campaign").val();
        utm_source = $("#utm_source").val();
        utm_medium = $("#utm_medium").val();
				utm_term = $("#utm_term").val();

        if (name == "") {
	        $(".nombre").focus();
            return false;
        } else if (lastname == "") {
	        $(".apellidos").focus();
            return false;
        } else if (email == "" || !validacion_email.test(email)) {
	        $(".email").focus();
            return false;
        } else if (tel == "") {
	        $(".telefono").focus();
            return false;
        } else if (codepostal == "") {
	        $(".cp").focus();
            return false;
        } else if (provincia == null) {
	        $(".provincia").focus();
            return false;
        } else if (estudios == null) {
	        $(".estudios").focus();
            return false;
        } else if (situacion == null) {
	        $(".situacion").focus();
            return false;
        } else if (situacion == "Estudiante" && responsable == "") {
            $(".responsable").focus();
            return false;
        } else {
            var datos = '&name='+ name + '&lastname=' + lastname + '&codepostal=' + codepostal + '&email=' + email + '&tel=' + tel + '&provincia=' + provincia + '&estudios=' + estudios + '&situacion=' + situacion + '&responsable=' + responsable + '&utm_campaign=' + utm_campaign + '&utm_source=' + utm_source + '&utm_medium=' + utm_medium + '&utm_term=' + utm_term;
             $.ajax({
                type: "POST",
                url: "send.php",
                data: datos,
                success: function(response) {
	                window.open("gracias.html","_self")
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg1').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '130px' }, 300);
                }
            });
            return false;
        }

    });
})();

(function() {
    $(".boton_send").click(function() {
        var name = $(".name").val();
        lastname = $(".lastname").val();
        codepostal = $(".cpostal").val();
        email = $(".correo").val();
        validacion_email = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
        tel = $(".telf").val();
        provincia = $(".provi").val();
        estudios = $(".estu").val();
        situacion = $(".situ").val();
				responsable = $(".responsable2").val();

        utm_campaign = $("#campaign").val();
        utm_source = $("#source").val();
        utm_medium = $("#medium").val();
				utm_term = $("#term").val();


        if (name == "") {
	        $(".name").focus();
            return false;
        } else if (lastname == "") {
	        $(".lastname").focus();
            return false;
        } else if (email == "" || !validacion_email.test(email)) {
	        $(".correo").focus();
            return false;
        } else if (tel == "") {
	        console.log("TEL: "+tel);
	        $(".telf").focus();
            return false;
        } else if (codepostal == "") {
	        $(".cpostal").focus();
            return false;
        } else if (provincia == null) {
	        $(".provi").focus();
            return false;
        } else if (estudios == null) {
	        $(".estu").focus();
            return false;
        } else if (situacion == null) {
	        $(".situ").focus();
            return false;
        } else if (situacion == "Estudiante" && responsable == "") {
            $(".responsable2").focus();
            return false;
        } else {
            var datos = '&name='+ name + '&lastname=' + lastname + '&codepostal=' + codepostal + '&email=' + email + '&tel=' + tel + '&provincia=' + provincia + '&estudios=' + estudios + '&situacion=' + situacion + '&responsable=' + responsable + '&utm_campaign=' + utm_campaign + '&utm_source=' + utm_source + '&utm_medium=' + utm_medium + '&utm_term=' + utm_term;
             $.ajax({
                type: "POST",
                url: "send.php",
                data: datos,
                success: function() {
                    window.open("gracias.html","_self")
                },
                error: function() {
                    $('.ajaxgif').hide();
                    $('.msg1').text('Hubo un error!').addClass('msg_error').animate({ 'right' : '130px' }, 300);
                }
            });
            return false;
        }

    });
})();
