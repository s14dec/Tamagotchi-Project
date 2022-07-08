
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

const background = document.querySelector('.background')


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

        hungerManage(){
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

        }
        






    }




    gameTime.hungerManage()