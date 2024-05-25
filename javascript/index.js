
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
}

updateTime();
setInterval(updateTime, 1000);