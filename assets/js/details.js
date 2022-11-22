// ---------- Show Pokemon Details ----------
document.addEventListener('click', function(e){
    if(e.target.innerText == "More details"){
        let pokeactual = e.target.parentElement
        let pokeli = document.querySelector('#modalpoke')
        console.log(pokeactual.class);
        pokeli.innerHTML = pokeactual.innerHTML
        pokeactual.pokeli.innerHTML = "Status"  
    } 

})

