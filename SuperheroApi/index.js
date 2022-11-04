/*Buttons and search bar*/
let barSearch = document.getElementById('search-bar')
let buttonSearch = document.getElementById('search-button')
let buttonClick = document.getElementById('div-button')

/*Super hero name and Origin*/
let superHeroName = document.getElementById('super-hero-name')
let superHeroOrigin = document.getElementById('origin-super-hero')

/*Super Hero Picture*/
let containerDiv = document.getElementById('picture-super-hero')

/*Super Hero Stats*/
let statCombat = document.getElementById('stat-combat')
let statDurability = document.getElementById('stat-durability')
let statIntelligence = document.getElementById('stat-intelligence')
let statPower = document.getElementById('stat-power')
let statSpeed = document.getElementById('stat-speed')
let statStrength = document.getElementById('stat-strength')

/*Super Hero Work*/
let superHeroWork = document.getElementById('superhero-work')

const urlFirst = 'https://www.superheroapi.com/api.php/1815924282077905'
let randomImage

/*Function random Image*/
const randomImg = () => {
    randomImage = Math.ceil(Math.random() * 730)
    return randomImage
}

/*Function Show random the superhero*/
const getRandomSuperHero = (randomNumber) => {
    fetch(`${urlFirst}/${randomNumber}`)
    .then(test => test.json()
    .then(response => {
        superheroNameOrigin(response)
        superHeroPicture(response)
        superHeroStats(response)
        superHeroWorks(response)
    }))
}

/*Function show selected Super Hero*/
const getSuperHero = (fullName) => {
    fetch(`${urlFirst}/search/${fullName}`)
    .then(test => test.json()
    .then(response => {
        superheroNameOrigin(response)
        superHeroPicture(response)
        superHeroStats(response)
        superHeroWorks(response)
    }))
}


/* Get and Set Super hero name and Origin*/
const superheroNameOrigin = (arg) =>{
    if("results" in arg){
        superHeroName.innerHTML = `<p> Name : ${arg.results[0].name}</p>`
        superHeroOrigin.innerHTML = `<p> Origin : ${arg.results[0].biography.publisher}</p>`
    }else{
        superHeroName.innerHTML = `<p> Name : ${arg.name}</p>`
        superHeroOrigin.innerHTML = `<p> Origin : ${arg.biography.publisher}</p>`
    }
}

/* get and Set Super Hero Picture*/
const superHeroPicture = (arg) =>{
    if("results" in arg){
        containerDiv.innerHTML =`<img src="${arg.results[0].image.url}" width = 200 height = 300>`
    }else{
        containerDiv.innerHTML =`<img src="${arg.image.url}" width = 200 height = 300>`
    }
}

/*Get and Set uper Hero Stats*/
const superHeroStats = (arg) =>{
    if("results" in arg){
        statCombat.innerHTML = `<p> Combat : ${arg.results[0].powerstats.combat}</p>`
        statDurability.innerHTML = `<p> Durabiulity : ${arg.results[0].powerstats.durability}</p>`
        statIntelligence.innerHTML = `<p> Intelligence : ${arg.results[0].powerstats.intelligence}</p>`
        statPower.innerHTML = `<p> Power : ${arg.results[0].powerstats.power}</p>`
        statSpeed.innerHTML = `<p> Speed : ${arg.results[0].powerstats.speed}</p>`
        statStrength.innerHTML = `<p> Strength : ${arg.results[0].powerstats.strength}</p>`
    }else{
        statCombat.innerHTML = `<p> Combat : ${arg.powerstats.combat}</p>`
        statDurability.innerHTML = `<p> Durabiulity : ${arg.powerstats.durability}</p>`
        statIntelligence.innerHTML = `<p> Intelligence : ${arg.powerstats.intelligence}</p>`
        statPower.innerHTML = `<p> Power : ${arg.powerstats.power}</p>`
        statSpeed.innerHTML = `<p> Speed : ${arg.powerstats.speed}</p>`
        statStrength.innerHTML = `<p> Strength : ${arg.powerstats.strength}</p>`
    }
}

/*Get and Set Super Hero Work*/
const superHeroWorks = (arg) =>{
    if("results" in arg){
        superHeroWork.innerHTML = `<p> Work : ${arg.results[0].work.base}</p>`
    }else{
        superHeroWork.innerHTML = `<p> Work : ${arg.work.base}</p>`
    }
}

buttonClick.onclick = () => {
    getRandomSuperHero(randomImg())
}

buttonSearch.onclick =() =>{
    getSuperHero(barSearch.value)
}