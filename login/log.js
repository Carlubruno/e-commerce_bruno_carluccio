const USER_LOG = {
    email: "rosbruno1234@gmail.com",
    password: "hola"
};

    const submit = document.querySelector("#form")


const login = ev => {
    ev.preventDefault()
    let password = ev.target.elements.password.value;
    let email = ev.target.elements.email.value;
    
    if(password === USER_LOG.password && email === USER_LOG.email){

        let alert = document.querySelector(".init")
        
        
            alert.style.display = "block"
            alert.innerHTML = ""
            alert.innerHTML = "Sesion Iniciada!"
            alert.style.color = "white";
            alert.style.fontSize = "20px";
            
        setTimeout(() => {
            
            localStorage.setItem("quantity", "0");
        localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("email", USER_LOG.email)
        console.log("email y contraseña correctos");
        window.location.href = "/index.html";
          }, 2500);
        
        
        

    }else{
            let alert = document.querySelector(".init")
            alert.style.display = "block"
            alert.innerHTML = "Contraseña Incorrecta."
            alert.style.color = "white";
            alert.style.fontSize = "20px";
        password.value = "";
        email.value = "";
        
    }
    
}
submit.addEventListener("submit", login)