const home = document.getElementById("home");
home.style.color = "gold";


const github = document.getElementById("github");
github.addEventListener("click", () => {
    window.location.href ="https://github.com/K5JSZZ";
})
// icon 
const instagram = document.getElementById("instagram");
instagram.addEventListener("click", () =>{
    window.location.href ="https://www.instagram.com/reels/CyLkBAOJQ_0/";
})

const githublogin = document.getElementById("githublogin");
githublogin.addEventListener("click", () =>{
    window.location.href = "https://github.com/";
})

const facebook = document.getElementById("facebook");
facebook.addEventListener("click", () =>{
    window.location.href ="https://www.facebook.com/";
})

// end icon

// Login
const Login = document.getElementById('Login');
Login.addEventListener("click", () => {
    window.location.href = "/Login/Login.html";
})