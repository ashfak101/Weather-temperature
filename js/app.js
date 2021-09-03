const API_KEY =`78f4569cbbaf656ca92b87c1a0fec290`

const searchTemperature=()=>{
    const city = document.getElementById('city-name').value

    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayTemperature(data))
}

const displayTemperature=(temperature)=>{
    console.log(temperature)
}