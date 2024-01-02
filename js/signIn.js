const Btn=document.querySelector("#signInBtn")
const userEmail=document.querySelector("#emailSign");
const userPass=document.querySelector("#passwordSign");
const ancor=document.querySelector('.ancor')
var userData = [];
userData = JSON.parse(localStorage.getItem('all data'))

console.log(userData);


Btn.addEventListener('click',login)
function login(){
    console.log(userEmail.value);
if(userEmail.value==""||userPass.value==""){
document.querySelector("#InputsSignIn").nextElementSibling.textContent="Enter main Information"

}


for(let i=0 ; i<userData.length ;i++){
    if(userData[i].userEmail==userEmail.value&&userData[i].password==userPass.value)
    {
            localStorage.setItem('currentSession',userData[i].Name)
             ancor.setAttribute("href", "welcome.html");
            
    }
}
}
username=localStorage.getItem("currentSession")