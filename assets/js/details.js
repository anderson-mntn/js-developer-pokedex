// ---------- Show Pokemon Details ----------



let modal = document.querySelector('#modal-id')
let closeModalBtn = document.querySelector('#closeBtn')
document.addEventListener('click', function(e){
    if(e.target.innerText == "More details"){
        modal.style.display = "flex"
        let pokeactual = e.target.parentElement
        let pokeli = document.querySelector('#modalpoke')
        console.log(pokeactual.class);
        pokeli.innerHTML = pokeactual.innerHTML
        pokeactual.pokeli.innerHTML = "Status"  
    }
    if(e.target.id == "closeBtn"){
        modal.style.display = "none"
    } 

})

