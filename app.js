const input = document.querySelector("#input");
const button = document.querySelector(".btn");
const div = document.querySelector(".container");


button.addEventListener(`click` , ()=>{
    let location = input.value;
    
    fetch(`https://api.weatherapi.com/v1/current.json?key=3dc8cc1e4150499eab7193322241911&q=${location}`)
    .then(res => res.json())
    .then(res => {
     div.innerHTML = `
          <div class="rendering">
          <img id="image" src="${res.current.condition.icon}" alt="image not found">
          <h1>  ${res.current.temp_c}°C</h1>
            <h1 class="name"> ${res.location.name}</h1>
            <h1> Humidity : ${res.current.humidity}%  </h1>
            <h1> Wind : ${res.current.wind_kph}kph </h1>

        </div>
     `
     
     
    })
    .catch(err => {
        div.innerHTML =`
    <h1>${location} is not a city </h1>
        `
    })
    
});
