1º He ido implementado las pestañas en el html enlaces a css y js.

2º Botones de Inicio de sesión y login

<div class="boton">
            <button id="login">Iniciar Sesión</button>
            <button id="singup">Crear una cuenta</button>
        </div>

    function pestaña(a, b) {
    document.getElementById(a).style.display = "block";
    document.getElementById(b).style.display = "none";
}

3º Input y label para cada uno de los campos en el html, patterns y titulos con restricciones

 <label for="usuario">Correo electrónico o Teléfono:</label>
                <input type="text" name="usuario" id="usuario"
                    pattern="^([0-9]{9})|([A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})$"
                    title="Debe ser un eMail o Teléfono correcto" required><br><br>

4º Botones para entrar y registrarse
    <input type="submit" id="registrarse" value="Registrarse" onclick="validar()"><br>

5º comparar contraseñas y mostrar

function mostrarContraseña(checkbox) {
    var pass = document.getElementById("contraseña");
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

    6º Implementacion de las cookies

    setCookie('nombre', email, 365);
    setCookie('contraseña', pass, 365);
    pestaña("inicio", "registro");
    document.getElementById("confirmacion").style.display = 'block';

    setTimeout(function () {
        document.getElementById("confirmacion").style.display = 'none';
    }, 3000);

    return true;
}

function validar() {
    event.preventDefault();
    confirmacion();
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

7º Confirmacion de logueo

document.getElementById("entrar").addEventListener("click", function () {
    entrar();
});

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

function entrar() {
    event.preventDefault();
    login();
}

8º Salir y eliminacion de la coockie

<button onclick="salir()">Salir</button>

function salir() {
    document.getElementById("login").style.display = 'inline-block';
    document.getElementById("singup").style.display = 'inline-block';
    delete_cookie("usuario");
    pestaña("inicio", "salir");
}