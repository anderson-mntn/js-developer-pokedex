const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
            <div class="pokemon-btn" id="btn-pokedetails">More details</div>
            <ul class="main-stats">
                <li>Weight: <span>${pokemon.weight / 10} kg</span></li>
                <li>Height: <span>${pokemon.height / 10} m</span></li>
                <li>Main Move: <span>${pokemon.mainmove}</span></li>
            </ul>
            <input type="button" value="X" class="closeButton" id="closeBtn">

        </li>
    `
}

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertPokemonToLi).join('')
        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordsWithNexPage = offset + limit

    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

//  ---------- Modal and click events  ----------
let modal = document.querySelector('#modal-id')
let closeModalBtn = document.querySelector('#closeBtn')

document.addEventListener('click', function(e){
    if(e.target.innerText == "More details"){
        modal.style.display = "flex"
        let pokeactual = e.target.parentElement
        var pokeli = document.querySelector('#modalpoke')
        console.log(pokeactual.class);
        pokeli.innerHTML = pokeactual.innerHTML
    }

    if(e.target.id == "closeBtn"){
        modal.style.display = "none"
    } 

})


   