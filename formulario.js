function pestaña(a, b) {
    document.getElementById(a).style.display = "block";
    document.getElementById(b).style.display = "none";
}

document.getElementById("login").addEventListener("click", function () {
    pestaña("inicio", "registro");
});

document.getElementById("singup").addEventListener("click", function () {
    pestaña("registro", "inicio");
});

document.getElementById("entrar").addEventListener("click", function () {
    entrar();
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
}

function confirmacion() {
    var pass = document.getElementById("contraseña2").value;
    var pass1 = document.getElementById("confirmar").value;
    var email = document.getElementById("email").value;

    if (pass == "" || pass1 == "") {
        document.getElementById("mensaje").innerHTML = "Las contraseñas no pueden estar en blanco";
        return false;
    }
    if (pass == pass1) {
        document.getElementById("mensaje").innerHTML = "Las contraseñas coinciden";
    } else {
        document.getElementById("mensaje").innerHTML = "Las contraseñas no coinciden";
        return false;
    }

    setCookie('nombre', email, 365);
    setCookie('contraseña', pass, 365);
    pestaña("inicio", "registro");
    document.getElementById("confirmacion").style.display = 'block';

    setTimeout(function () {
        document.getElementById("confirmacion").style.display = 'none';
    }, 3000);

    return true;
}

function login() {
    var pass = document.getElementById("contraseña").value;
    var usuario = document.getElementById("usuario").value;
    var nombreGuardado = getCookie('nombre');
    var contraseñaGuardada = getCookie('contraseña');
    if (usuario==nombreGuardado && pass==contraseñaGuardada){
        document.getElementById("confirmacion").style.display = "block";
        document.getElementById("confirmacion").style.color = "green";
        document.getElementById("confirmacion").innerHTML = "<h1>Bienvenido</h1>";
    } else {
        document.getElementById("confirmacion").style.display = "block";
        document.getElementById("confirmacion").style.color = "red";
        document.getElementById("confirmacion").innerHTML = "Los datos no coinciden";
        return false;
    }

    setCookie('usuario', usuario, 1/24);

    setTimeout(function () {
        document.getElementById("confirmacion").style.display = 'none';
        document.getElementById("login").style.display = 'none';
        document.getElementById("singup").style.display = 'none';
        document.getElementById("saludo").innerHTML = "Hola " + usuario;
        pestaña("salir", "inicio");
    }, 3000);
}

function validar() {
    event.preventDefault();
    confirmacion();
}

function entrar() {
    event.preventDefault();
    login();
}

function salir() {
    document.getElementById("login").style.display = 'inline-block';
    document.getElementById("singup").style.display = 'inline-block';
    delete_cookie("usuario");
    pestaña("inicio", "salir");
}


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function delete_cookie( name ) {
  document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

