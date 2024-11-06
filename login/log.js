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
        
        localStorage.setItem("quantity", "0");
        localStorage.setItem("cart", JSON.stringify([]))
        localStorage.setItem("email", USER_LOG.email)
        console.log("email y contraseña correctos");
        window.location.href = "/index.html";
        
        

    }else{

        alert("Contraseña Incorrecta")
        password.value = "";
        email.value = "";
        
    }
    
}
submit.addEventListener("submit", login)