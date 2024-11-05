const Authenticator =  () => {
    if(localStorage.getItem("email")){
        location.href = "/index.html"
    }
}
Authenticator();