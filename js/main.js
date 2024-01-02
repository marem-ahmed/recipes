if(!localStorage.getItem("all data")){
    window.location.replace("signIn.html")
}
let data=[];
const links= Array.from(document.querySelectorAll('.home .nav-link'));
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click' ,function(e){
        const curentlink =  e.target.innerHTML;

        getApi(curentlink)

    } )
}

 async function getApi(recipe){
    let myHttp= await fetch(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`);
  let response = await myHttp.json();
    data=response.recipes;
    displayRecipes()
}
getApi('pasta')
function displayRecipes(){
    let cols=``
    for(var i=0;i<data.length;i++){
cols+=`
    
<div class="col-md-4    mb-4">    
    <div class="card text-center h-100 bg-dark">
            <img src="${data[i].image_url}" class="card-img-top img-height w-100" alt="title">
            <div class="card-body">
              <h4>${data[i].title}</h4>
            <a target="_blank" href="${data[i].source_url}" class="btn btn-warning"> source</a>
            </div>
          
    </div>
</div>
    
        `
        


    }
document.getElementById('rowRecipts').innerHTML=cols;
}
displayRecipes()

const btn=document.querySelector("#logoutBtn")
btn.addEventListener('click',logOut)
function logOut(){
    localStorage.removeItem("currentSession")
    window.location.replace("signIn.html")
}