let weatResponse = document.querySelector('.weather__response')
let weatButton = document.querySelector('.weather__button')
let weatCreate = document.querySelector('.weather__create')
weatButton.addEventListener('click', function(){
    let responseValue = weatResponse.value
    let apiKey = '7653902dc79d9a2785225c6ec31c80d1';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${responseValue}&appid=${apiKey}&units=metric&lang=uk`,{
        method: 'GET'
    })
    .then(response =>{
        if(!response.ok){
            console.log(response)
        }
        return response.json()
    })
    .then(data =>{
        console.log(data)
        weatCreate.innerHTML = ''
        weatCreate.style.display = 'block'
        let createTitle = document.createElement('h2')
        createTitle.textContent = `Прогноз погоди для ${data.name}, ${data.sys.country}`
        weatCreate.appendChild(createTitle)
        createTitle.classList.add('create__title')
        //TEMPERATURE
        let tempBox = document.createElement('div')
        weatCreate.appendChild(tempBox)
        tempBox.classList.add('temperature__box')

        let feelBox = document.createElement('div')
        weatCreate.appendChild(feelBox)
        feelBox.classList.add('feeling__box')

        let tempIcon = document.createElement('img')
        tempIcon.src = 'temp.png'
        tempBox.appendChild(tempIcon)
        tempIcon.classList.add('temperature__icon')

        let weatTemp = document.createElement('p')
        weatTemp.textContent = `Температура: ${Math.round(data.main.temp)}°C `
        tempBox.appendChild(weatTemp)
        weatTemp.classList.add('create__temperature')

        let feelIcon = document.createElement('img')
        feelIcon.src = 'temp.png'
        feelBox.appendChild(feelIcon)
        feelIcon.classList.add('feeling__icon')

        let tempFeel = document.createElement('p')
        tempFeel.textContent = `Відчувається як: ${Math.round(data.main.feels_like)}°C `
        feelBox.appendChild(tempFeel)
        tempFeel.classList.add('create__feel')
        //MAIN INFO
        let descBox = document.createElement('div')
        weatCreate.appendChild(descBox)
        descBox.classList.add('description__box')

        let windBox = document.createElement('div')
        weatCreate.appendChild(windBox)
        windBox.classList.add('wind__box')

        let humidIcon = document.createElement('img')
        humidIcon.src = 'humidity.png'
        descBox.appendChild(humidIcon)
        humidIcon.classList.add('humid__icon')

        let weatHumid = document.createElement('p')
        weatHumid.textContent = `Вологість: ${Math.round(data.main.humidity)}% `
        descBox.appendChild(weatHumid)
        weatHumid.classList.add('create__humidity')

        let windIcon = document.createElement('img')
        windIcon.src = 'wind.png'
        windBox.appendChild(windIcon)
        windIcon.classList.add('wind__icon')

        let weatWind = document.createElement('p')
        weatWind.textContent = `Швидкість вітру: ${Math.round(data.wind.speed)} км/год`
        windBox.appendChild(weatWind)
        weatWind.classList.add('create__wind')
    })
    .catch(error =>{
        console.error(error)
    })
}
)



