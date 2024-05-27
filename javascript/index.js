
function updateTime() {
//Taipei
let taipeiElement = document.querySelector("#taipei");
let taipeiDateElement = taipeiElement.querySelector(".date");
let taipeiTimeElement = taipeiElement.querySelector(".time");
let taipeiTime = moment().tz("Asia/Taipei");

taipeiDateElement.innerHTML = taipeiTime.format("dddd, MMMM Do, YYYY");
taipeiTimeElement.innerHTML = taipeiTime.format("h:mm:ss [<small>]A[</small>]");

//Buenos Aires
let buenosAiresElement = document.querySelector("#buenos-aires");
let buenosAiresDateElement = buenosAiresElement.querySelector(".date");
let buenosAiresTimeElement = buenosAiresElement.querySelector(".time");
let buenosAiresTime = moment().tz("America/Argentina/Buenos_Aires");

buenosAiresDateElement.innerHTML = buenosAiresTime.format("dddd, MMMM Do, YYYY");
buenosAiresTimeElement.innerHTML = buenosAiresTime.format("h:mm:ss [<small>]A[</small>]");


//Dublin 
let dublinElement = document.querySelector("#dublin");
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime = moment().tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTime.format("dddd, MMMM Do, YYYY");
dublinTimeElement.innerHTML = dublinTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let citySelectedTimeZone = event.target.value;
    if (citySelectedTimeZone === "current") {
        citySelectedTimeZone = moment.tz.guess();
    }
    let citySelectedName = citySelectedTimeZone.replace("_", " ").split("/")[1];
    let citySelectedDate = moment().tz(citySelectedTimeZone).format("dddd, MMMM Do, YYYY");
    let citySelectedTime = moment().tz(citySelectedTimeZone).format("h:mm:ss [<small>]A[</small>]");
    let citiesDisplayedElement = document.querySelector("#displayed-cities");
    citiesDisplayedElement.innerHTML = 
    `
    <div class="city">
        <div>
            <h2>${citySelectedName}</h2>
            <div class="date">${citySelectedDate}</div>
        </div>

        <div class="time">${citySelectedTime}</div>
    </div>
    <a href="/">All cities</a>
    `;
}

let citiesSelectElement = document.querySelector("#select-city");
citiesSelectElement.addEventListener("change", updateCity);