[
    {
    name: "spiderman",
    league: "otherHeroes",
   },
    {
    name: "batman",
    league: "Justice league",
   }
]

const justiceLeague = [
    "batman", "wonderwoman", "cyborg", "flash", "aquaman","spiderman", "superman", "greenlantern"
]

const theOtherHeroes = [
    "crimsonmechdude", "hammerboy", "greenguy", "hawkguy", "blackassassin","shieldbro", "captneyepatch"
]
// 1
// console.log(theOtherHeroes[6])
// 2
justiceLeague.splice(1,1, "diana prince")
// console.log(justiceLeague)
// 3
justiceLeague.splice(7)
// console.log(justiceLeague)

// 4
theOtherHeroes.map((hero) => {
    let newCharacter = hero.concat("member")
    return console.log(newCharacter)
})
// theOtherHeroes.forEach.push("member")
// console.log(theOtherHeroes)

// 5
const allHeroes = justiceLeague.concat(theOtherHeroes)
// console.log(allHeroes)




