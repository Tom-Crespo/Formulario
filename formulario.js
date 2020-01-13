function pestaña(a, b) {
    document.getElementById(a).style.display = "block";
    document.getElementById(b).style.display = "none";
}

document.getElementById("login").addEventListener("click", function() {
    pestaña("inicio", "registro");
});

document.getElementById("singup").addEventListener("click", function() {
    pestaña("registro", "inicio");
});

function mostrarContraseña(checkbox) {
    var pass = document.getElementById("contraseña");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function mostrarContraseña2(checkbox) {
    var pass = document.getElementById("contraseña2");
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }

    validar();
}


function validar() {
    var pass = document.getElementById("contraseña2").value;
    var pass1 = document.getElementById("confirmar").value;

    if (pass != pass1) {
        document.getElementById("mensaje").innerHTML = "Las contraseñas no coinciden";
    } else {
        document.getElementById("mensaje").innerHTML = "Las contraseñas coinciden";
    }
}

/*
//Crear uan cookie
document.cookie = "usuario = ;";
document.cookie = "contraseña = 123456aA_;";

//Leer la cookie
var miCookie = document.cookie;
alert(miCookie);

//Modificar una cookie
document.cookie = "usuario = ha cambiado;";
alert(document.cookie);

//eliminar una cookie
document.cookie = "usuario=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
document.cookie = "contraseña=;expires=Thu, 01 Jan 1970 00:00:01 GMT";
alert(document.cookie);
*/