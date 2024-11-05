console.log("hola");
    let log = document.getElementById("navbarLog")
    let nav = `<div>${localStorage.getItem("email") ? `<a onclick="closeSection()"><h3 class="logout">Cerrar Sesion</h3></a>`  : `<a href="login/login.html"><h3 class="login">Iniciar Sesion</h3></a>`}</div>`;
    log.innerHTML = nav;

    function closeSection(){
      localStorage.clear();
      window.location.href = "/login/login.html"
    }
        




