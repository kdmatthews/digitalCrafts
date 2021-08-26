
const data = [
    {
      pokemon: [
        {
          id: 1,
          name: "bulbasaur",
          hp: 45,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png",
          },
        },
        {
          id: 2,
          name: "ivysaur",
          hp: 60,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png",
          },
        },
        {
          id: 3,
          name: "venusaur",
          hp: 80,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png",
          },
        },
        {
          id: 4,
          name: "charmander",
          hp: 39,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png",
          },
        },
        {
          id: 5,
          name: "charmeleon",
          hp: 58,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png",
          },
        },
        {
          id: 6,
          name: "charizard",
          hp: 78,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png",
          },
        },
        {
          id: 7,
          name: "squirtle",
          hp: 44,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png",
          },
        },
        {
          id: 8,
          name: "wartortle",
          hp: 59,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png",
          },
        },
        {
          id: 9,
          name: "blastoise",
          hp: 79,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png",
          },
        },
        {
          id: 10,
          name: "caterpie",
          hp: 45,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png",
          },
        },
        {
          id: 11,
          name: "metapod",
          hp: 50,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png",
          },
        },
        {
          id: 12,
          name: "butterfree",
          hp: 60,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png",
          },
        },
        {
          id: 13,
          name: "weedle",
          hp: 40,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png",
          },
        },
        {
          id: 14,
          name: "kakuna",
          hp: 45,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png",
          },
        },
        {
          id: 15,
          name: "beedrill",
          hp: 65,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png",
          },
        },
        {
          id: 16,
          name: "pidgey",
          hp: 40,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png",
          },
        },
        {
          id: 17,
          name: "pidgeotto",
          hp: 63,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png",
          },
        },
        {
          id: 18,
          name: "pidgeot",
          hp: 83,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png",
          },
        },
        {
          id: 19,
          name: "rattata",
          hp: 30,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png",
          },
        },
        {
          id: 20,
          name: "raticate",
          hp: 55,
          sprites: {
            front:
              "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
            back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png",
          },
        },
      ],
    },
  ];

async function fetchPokemonData(){
    const pokemonData = await fetch("https://pokeapi.co/api/v2/pokemon");
    const jsonPokeData = await pokemonData.json(); 
    // console.table(jsonPokeData.results);   
    const cardContainer = document.querySelector(".card-container");
    

   

    // for (const singleCardData of jsonPokeData.results){
    //     const cards = document.createElement("div");
    //     cards.className = "cards"
        
        
    //     // const cardImg = document.createElement("img");
    //     // cardImg.src = "";

    //     // cards.append(cardImg);
    //     const cardName = document.createElement("h4");
    //     cards.append(cardName);
    //     cardName.innerHTML = singleCardData.name;

    //     cardContainer.append(cards);
    
    // for (const singleSprites of data){
    //     const pokemonEntry = singleSprites.pokemon;
        
    
    //     for (const singleSomething of pokemonEntry[0]){
    //         console.log(singleSomething);
    //         const cards = document.querySelector('.cards');
    //         const cardImg = document.createElement("img");
    //         const cardContainer = document.querySelector('.card-container')
    //         // cardImg.src = "";
    //         // cards.append(cardImg);
    //         const spritesEntry = singleSomething.sprites;
    //         const frontEntry = spritesEntry.front;
    //         console.log(frontEntry);
    //         //  const cardImg = document.createElement("img");
    //         cardImg.src = frontEntry;
    //         // const sprites = document.createElement("div");
    //         // sprites.className = "sprites";
    //         // cards.append(cardImg);    
    //         // cardContainer.append(cardImg)   
            
    //     }
        
    //     }
           for (const singleCardData of jsonPokeData.results) {
                const cards = document.createElement("div");
                cards.className = "cards";
                const cardName = document.createElement("h4");
                cardName.innerHTML = singleCardData.name;
                cards.append(cardName);
                cardContainer.append(cards);
            }
            for (const pokemon of data) {
                const cardsToAddImages = document.querySelectorAll(".cards");
                for (let index = 0; index < cardsToAddImages.length; index++) {
                const element = cardsToAddImages[index];
                const cardImg = document.createElement("img");
                cardImg.src = pokemon.pokemon[index].sprites.front;
                element.append(cardImg);
                cardImg.onmouseover = () => console.log("hover over");
                cardImg.onmouseout = () => console.log("hoverout");
    
            } 
  
        // const spritesEntry = singleSprites.sprites;
        // const 

        // cardImg.append(spritesEntry)
    
    
        }
    }

fetchPokemonData();