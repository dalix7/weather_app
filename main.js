const apiKey = '6e48fc1ae283ce7dfba64676cb9c25b8'
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')
async function checkweather (city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
  var data = await response.json()

  console.log(data)
  document.querySelector('.city').innerHTML = data.name
  document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C'
  document.querySelector('.humidity').innerHTML = data.main.humidity + '%'
  document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h'
}

searchBtn.addEventListener('click', () => {
  checkweather(searchBox.value)
})
