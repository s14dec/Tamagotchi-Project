
// Main Buttons
const startButton = document.querySelector('#start')

const feedButton = document.querySelector('#feed')

const lightsButton = document.querySelector('#lights')

const playButton = document.querySelector('#play')

// Stats
const petName = document.querySelector('#name')

const hungerStat = document.querySelector('#hungerNum')

const sleepinessStat = document.querySelector('#sleepinessNum')

const boredomStat = document.querySelector('#boredomNum')

const ageStat = document.querySelector('#ageNum')

// Images

const petImage = document.querySelector('#pet')

const background = document.querySelector('#day')

// Light Switch

let light = true


class Pet{
    constructor(name, hunger, sleepiness, boredom, age){
        this.name = name
        this.hunger = hunger
        this.sleepiness = sleepiness
        this.boredom = boredom
        this.age = age
    
    }

    feedPet(){
        this.hunger--
    }

    napTime(){
        this.sleepiness = this.sleepiness - 5
    }

    playPet(){
        this.boredom--
    }
}

    const tamaPet = new Pet("", 1, 1, 1, 0)

    const gameTime = {

        nameSet() {
            tamaPet.name = prompt('What do you want to name your pet?','Pet name')
            petName = tamaPet.name
        },


        hungerManage() {
            const hungerIncrease = setInterval(() => {
                tamaPet.hunger++
                hungerStat.innerHTML = tamaPet.hunger

                if(tamaPet.hunger >= 10){
                    alert(`${tamaPet.name} has perished due to Hunger`)
                    clearInterval(hungerIncrease)
                }
            }, 5000)

            feedButton.addEventListener("click", () => {
                tamaPet.feedPet()
                hungerStat.innerHTML = tamaPet.hunger
            })

        },

        sleepinessManage() {
            const sleepIncrease = setInterval(() => {
                tamaPet.sleepiness++
                sleepinessStat.innerHTML = tamaPet.sleepiness

                if(tamaPet.sleepiness >= 10){
                    alert(`${tamaPet.name} has perished due to Sleepiness`)
                    clearInterval(sleepIncrease)
                }
            }, 7000)


            lightsButton.addEventListener("click", () => {
                if(light == true){
                    background.src = 'pictures/background night.jpeg'
                    light = false
                    tamaPet.napTime()
                sleepinessStat.innerHTML = tamaPet.sleepiness
                }
                else{
                    background.src = 'pictures/background morning.jpeg'
                    light = true
                }
                
            })
            
        },

        boredomManage() {
            const boredomIncrease = setInterval(() => {
                tamaPet.boredom++
                boredomStat.innerHTML = tamaPet.boredom

                if(tamaPet.boredom >= 10){
                    alert(`${tamaPet.name} has perished due to Boredom`)
                    clearInterval(boredomIncrease)
                }
            }, 3000)

            playButton.addEventListener("click", () => {
                tamaPet.playPet()
                boredomStat.innerHTML = tamaPet.boredom
            })
        },

        ageManage() {
            const ageIncrease = setInterval(() => {
                tamaPet.age++
                ageStat.innerHTML = tamaPet.age

                if(tamaPet.age == 2){
                    alert(`${tamaPet.name} has evolved!`)
                    petImage.src = 'pictures/sprite2.png'
                }
                if(tamaPet.age == 5){
                    alert(`${tamaPet.name} has evolved once more!`)
                    petImage.src = 'pictures/sprite3.png'
                }
            }, 9000)
        }








    }

    
gameTime.ageManage()

    