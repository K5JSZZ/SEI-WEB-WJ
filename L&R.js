function Register() {
    window.location.href ="/Register/Register.html"
}
// 1
var Username = document.getElementById("Username");
var Password = document.getElementById("Password");

function Check() {
    localStorage.setItem("Username", Username.value);
    localStorage.setItem("Password", Password.value);
    window.location.href="/Login/Login.html";
}

// Login js local storage

function Submit(){
    var storename = localStorage.getItem("Username");
    var StorePassword = localStorage.getItem("Password");

    var Setuser = document.getElementById("Setuser");
    var setPassword = document.getElementById("setPassword");
    

    if(Setuser.value == storename || setPassword.value == StorePassword){
        window.location.href ="/index.html";
    }
    else{
        alert("YOU WRONG, PLEASE TRY AGAIN!")
    }
}
