function welcome(){
const msg=document.querySelector(".weclomeMsg");
const currSession=localStorage.getItem("currentSession")
msg.innerHTML='Welcome ' +currSession;
}
const btn=document.querySelector("#logoutBtn")
btn.addEventListener('click',logOut)
function logOut(){
    localStorage.removeItem("currentSession")
    window.location.replace("signIn.html")
}