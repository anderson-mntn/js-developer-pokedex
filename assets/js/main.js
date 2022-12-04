const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 12
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
                    <div class="poke-img"><img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                    </div>        
            </div>
            <div class="pokemon-btn" id="btn-pokedetails">More details</div>
            <ul class="stats-board">
                <li id="board-att-li">Stats</li>
                <li>Attributes</li>
                <li>Story</li>
            </ul>
            <ul class="main-stats">
                <li>Weight: ${pokemon.weight / 10}kg</li>
                <li>Height: ${pokemon.height / 10}m</li>
                <li>Main move: ${pokemon.mainmove}</li>
                <li>Ability: ${pokemon.abi}</li>
            </ul>
            <ul class="poke-stats">
                <li class="stats-li">HP</li> <li>${pokemon.hp}</li> <li class="poke-bar"><div class="bar-hp bar" style="width: ${pokemon.hp}%">&nbsp;</div></li>
                <li class="stats-li">ATK</li> <li>${pokemon.atk}</li> <li class="poke-bar"><div class="bar-atk bar" style="width: ${pokemon.atk}%">&nbsp;</div></li>
                <li class="stats-li">DEF</li> <li>${pokemon.def}</li> <li class="poke-bar"><div class="bar-def bar" style="width: ${pokemon.def}%">&nbsp;</div></li>
                <li class="stats-li">SATK</li> <li>${pokemon.spcatk}</li> <li class="poke-bar"><div class="bar-satk bar" style="width: ${pokemon.spcatk}%">&nbsp;</div></li>
                <li class="stats-li">SDEF</li> <li>${pokemon.spcdef}</li> <li class="poke-bar"><div class="bar-sdef bar" style="width: ${pokemon.spcdef}%">&nbsp;</div></li>
                <li class="stats-li">SPD</li> <li>${pokemon.speed}</li> <li class="poke-bar" ><div class="bar-spd bar" style="width: ${pokemon.speed}%">&nbsp;</div></li>
            </ul>
            <input type="button" value="X" class="closeButton" id="closeBtn">

        </li>
    `
}
// <li>Stats</li>
// <li>History</li>

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
        let pokeActual = e.target.parentElement
        var pokeLi = document.querySelector('#modalpoke')
        pokeLi.innerHTML = pokeActual.innerHTML
        let pokeClass = pokeActual.classList[1]
        pokeLi.classList = pokeClass
        pokeLi.classList.add("mostrar")
    }
    if(e.target.id == "closeBtn"){
        modal.style.display = "none"
    }
    if(e.target.innerHTML == "Attributes"){
        let attUlMainStats = document.querySelector(".modal .main-stats")
        let pokeStatsUl = document.querySelector(".modal .poke-stats")
        attUlMainStats.style.display = "flex"
        pokeStatsUl.style.display = "none"
        
    }
    if(e.target.innerHTML == "Stats"){
        let attUlMainStats = document.querySelector(".modal .main-stats")
        let pokeStatsUl = document.querySelector(".modal .poke-stats")
        attUlMainStats.style.display = "none"
        pokeStatsUl.style.display = "grid"
    }
})


// attributes - stats - story : display

//Selectors

