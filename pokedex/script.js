// Insert your code here

function pokedex(){

let count = document.querySelectorAll('.pokemon').length

for (let i = count + 1; i <= count+15 ; i++){ // la boucle doit permettre de ressortir les url des 15 premiers pokemon
let api = "https://pokeapi.co/api/v2/pokemon/"
let url = api+i
//console.log(count) // le count se lance 15 fois d'affilé et affiche 0 en début et fin

//console.log(url) // j'obtiens la liste des URL avec ID différents

    fetch(`${url}`)
    .then(response => response.json())
    .then(data => {
        //console.log(data.types[0].type.name)//console pour tester et trouver les bonnes datas
        //j'intègre en dessous des blocs HTML dynamiques cherchant les datas
        document.querySelector('#pokemonContainer').innerHTML += `
        <div class="pokemon ${data.types[0].type.name}">
        <div class="imgContainer">
        <img src="${data.sprites.front_default}" alt="Clefairy" />
        </div>
        <div class="info">
        <h3 class="name">${data.name.charAt(0).toUpperCase() + data.name    .slice(1)}</h3>
        <span class="type">Type: <span>${data.types[0].type.name}</span></span>
        </div>
        </div>`        
    
    // i=15 //je force i à 15 pour ensuite additionner de 15 en 15 au clic next
         return data
     })
     //console.log(count) // le count se lance 15 fois d'affilé et affiche 0 en début et fin
     
} 
}

pokedex()

document.querySelector('#next').addEventListener('click', function() {
    pokedex()
    })