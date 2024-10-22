const USER_LOG = {
    email: "rosbruno1234@gmail.com",
    password: "hola"
};
function login (){
    let password = document.querySelector("#password").value;
    let email = document.querySelector("#email").value;
    
    if(password === USER_LOG.password && email === USER_LOG.email){
        localStorage.setItem("password", USER_LOG.password)
        localStorage.setItem("email", USER_LOG.email)
        console.log("email y contraseña correctos");
        window.location.href = "/index.html";

    }else{
        alert("Contraseña Incorrecta")
        password.value = "";
        email.value = "";
        
    }
    
}
