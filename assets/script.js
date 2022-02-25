var peopleBtn = document.querySelector("#people");
var filmsBtn = document.querySelector("#films");
var starshipsBtn = document.querySelector("#starships");
var vehiclesBtn = document.querySelector("#vehicles");
var speciesBtn = document.querySelector("#species");
var planetsBtn = document.querySelector("#planets");
var quotesBtn = document.querySelector("#quotes");

peopleBtn.addEventListener("click", generateApiSearch);
filmsBtn.addEventListener("click", generateApiSearch);
starshipsBtn.addEventListener("click", generateApiSearch);
vehiclesBtn.addEventListener("click", generateApiSearch);
speciesBtn.addEventListener("click", generateApiSearch);
planetsBtn.addEventListener("click", generateApiSearch);
//quotesBtn.addEventListener('click', generateQuotesSearch);

function generateApiSearch(event) {
  console.log(event);
  //console.log(event.path[0].outerText);
  var searchEl = event.path[0].outerText;
  if (searchEl == "People") {
    var random = Math.floor(Math.random() * 82);
    var starWarsEl = "people/" + random;
    console.log(starWarsEl);
    searchPeople(starWarsEl);

    //aj's function
  }
  if (searchEl == "Films") {
    var random = Math.floor(Math.random() * 6);
    var starWarsEl = "films/" + random;
    console.log(starWarsEl);
    searchFilms(starWarsEl);
    //aj's function
  }
  if (searchEl == "Starships") {
    var random = Math.floor(Math.random() * 36);
    var starWarsEl = "starships/" + random;
    console.log(starWarsEl);
    searchStarships(starWarsEl);
    //aj's function
  }
  if (searchEl == "Vehicles") {
    var random = Math.floor(Math.random() * 39);
    var starWarsEl = "vehicles/" + random;
    console.log(starWarsEl);
    searchVehicles(starWarsEl);
    //aj's function
  }
  if (searchEl == "Species") {
    var random = Math.floor(Math.random() * 37);
    var starWarsEl = "species/" + random;
    console.log(starWarsEl);
    searchSpecies(starWarsEl);
    //aj's function
  }
  if (searchEl == "Planets") {
    var random = Math.floor(Math.random() * 60);
    var starWarsEl = "planets/" + random;
    console.log(starWarsEl);
    searchPlanets(starWarsEl);
    //aj's function
  }
}

//declaring variables for the people and attributes
var spaceOne = document.getElementById("spaceOne");
var spaceTwo = document.getElementById("spaceTwo");
var spaceThree = document.getElementById("spaceThree");
var spaceFour = document.getElementById("spaceFour");
var spaceFive = document.getElementById("spaceFive");
var spaceSix = document.getElementById("spaceSix");
var spaceSeven = document.getElementById("spaceSeven");
var spaceEight = document.getElementById("spaceEight");
var spaceNine = document.getElementById("spaceNine");
var spaceTen = document.getElementById("spaceTen");
var spaceEleven = document.getElementById("spaceEleven");
var spaceTwelve = document.getElementById("spaceTwelve");
var spaceThirteen = document.getElementById("spaceThirteen");
var catDisplay = document.getElementById("catDisplay");

//this function searches the star wars api for people and displays the data
function searchPeople(starWarsEl) {
  console.log(starWarsEl);
  axios
    .get("https://swapi.dev/api/" + starWarsEl + "/")
    .then(function (response) {
      console.log(response);
      catDisplay.textContent = "People Output";
      spaceOne.textContent = "Name: " + response.data.name;
      spaceTwo.textContent = "Birth Year: " + response.data.birth_year;
      spaceThree.textContent = "Home World: " + response.data.homeworld;
      spaceFour.textContent = "Species: " + response.data.species[0];
      spaceFive.textContent = "Gender: " + response.data.gender;
      spaceSix.textContent = "Height: " + response.data.height;
      spaceSeven.textContent = "Weight: " + response.data.mass;
      spaceEight.textContent = "Hair color: " + response.data.hair_color;
      spaceNine.textContent = "Skin color: " + response.data.skin_color;
      spaceTen.textContent = "Eye color: " + response.data.eye_color;
      // axios.get(response.data.results[0].vehicles).then(function (response) {
      //   console.log(response)
      // })

      spaceEleven.textContent = "Vehicles: " + response.data.vehicles;
      spaceTwelve.textContent = "Starships: " + response.data.starships;
      spaceThirteen.textContent = "Films" + response.data.films;
    })
    .catch((error) => {
      spaceOne.textContent =
        "Sorry! Cannot display API at this time. Try again later";
    });
}

// this function searches the star wars api for planets and displays the data
function searchPlanets(starWarsEl) {
  axios
    .get("https://swapi.dev/api/" + starWarsEl + "/")
    .then(function (response) {
      console.log(response);
      catDisplay.textContent = "Planets Output";
      spaceOne.textContent = "Name: " + response.data.name;
      spaceTwo.textContent = "Population: " + response.data.population;
      spaceThree.textContent = "Climate: " + response.data.climate;
      spaceFour.textContent = "Terrain: " + response.data.terrain;
      spaceFive.textContent = "Diameter: " + response.data.diameter;
      spaceSix.textContent = "Gravity: " + response.data.gravity;
      spaceSeven.textContent =
        "Rotational Period: " + response.data.rotation_period;
      spaceEight.textContent =
        "Orbital Period: " + response.data.orbital_period;
      spaceNine.textContent = "Surface Water: " + response.data.surface_water;
      spaceTen.textContent = "";
      spaceEleven.textContent = "";
      spaceTwelve.textContent = "";
      spaceThirteen.textContent = "";
    })
    .catch((error) => {
      spaceOne.textContent =
        "Sorry! Cannot display API at this time. Try again later";
    });
}

// this function searches the star wars api for films and displays the data
function searchFilms(starWarsEl) {
  axios
    .get("https://swapi.dev/api/" + starWarsEl + "/")
    .then(function (response) {
      console.log(response);
      catDisplay.textContent = "Films Output";
      spaceOne.textContent = "Title: " + response.data.title;
      spaceTwo.textContent = "Episode Number: " + response.data.episode_id;
      spaceThree.textContent = "Director: " + response.data.director;
      spaceFour.textContent = "Producers: " + response.data.producer;
      spaceFive.textContent = "Release Date: " + response.data.release_date;
      spaceSix.textContent = "Opening Crawl: " + response.data.opening_crawl;
      spaceSeven.textContent = "";
      spaceEight.textContent = "";
      spaceNine.textContent = "";
      spaceTen.textContent = "";
      spaceEleven.textContent = "";
      spaceTwelve.textContent = "";
      spaceThirteen.textContent = "";
    })
    .catch((error) => {
      spaceOne.textContent =
        "Sorry! Cannot display API at this time. Try again later";
    });
}
// this function searches the star wars api for starships and displays the data
function searchStarships(starWarsEl) {
  axios
    .get("https://swapi.dev/api/" + starWarsEl + "/")
    .then(function (response) {
      console.log(response);
      catDisplay.textContent = "Starships Output";
      spaceOne.textContent = "Starship: " + response.data.name;
      spaceTwo.textContent = "Manufacturer: " + response.data.manufacturer;
      spaceThree.textContent = "Model: " + response.data.model;
      spaceFour.textContent = "Cost: " + response.data.cost_in_credits;
      spaceFive.textContent = "Crew: " + response.data.crew;
      spaceSix.textContent = "Passengers: " + response.data.passengers;
      spaceSeven.textContent =
        "Cargo Capacity: " + response.data.cargo_capacity;
      spaceEight.textContent =
        "Hyperdrive Rating: " + response.data.hyperdrive_rating;
      spaceNine.textContent = "";
      spaceTen.textContent = "";
      spaceEleven.textContent = "";
      spaceTwelve.textContent = "";
      spaceThirteen.textContent = "";
    })
    .catch((error) => {
      spaceOne.textContent =
        "Sorry! Cannot display API at this time. Try again later";
    });
}

// this function searches the star wars api for vehicles and displays the data
function searchVehicles(starWarsEl) {
  axios
    .get("https://swapi.dev/api/" + starWarsEl + "/")
    .then(function (response) {
      console.log(response);
      catDisplay.textContent = "Vehicles Output";
      spaceOne.textContent = "Vehicle: " + response.data.name;
      spaceTwo.textContent = "Model: " + response.data.model;
      spaceThree.textContent = "Manufacturer: " + response.data.manufacturer;
      spaceFour.textContent = "Cost: " + response.data.cost_in_credits;
      spaceFive.textContent = "Crew: " + response.data.crew;
      spaceSix.textContent = "Passengers: " + response.data.passengers;
      spaceSeven.textContent =
        "Cargo Capacity: " + response.data.cargo_capacity;
      spaceEight.textContent = "Vehicle Class: " + response.data.vehicle_class;
      spaceNine.textContent = "Consumables: " + response.data.consumables;
      spaceTen.textContent = "";
      spaceEleven.textContent = "";
      spaceTwelve.textContent = "";
      spaceThirteen.textContent = "";
    })
    .catch((error) => {
      spaceOne.textContent =
        "Sorry! Cannot display API at this time. Try again later";
    });
}

// this function searches the star wars api for species and displays the data
function searchSpecies(starWarsEl) {
  axios
    .get("https://swapi.dev/api/" + starWarsEl + "/")
    .then(function (response) {
      console.log(response);
      catDisplay.textContent = "Species Output";
      spaceOne.textContent = "Species: " + response.data.name;
      spaceTwo.textContent = "Classification: " + response.data.classification;
      spaceThree.textContent = "Designation: " + response.data.designation;
      spaceFour.textContent = "Average Height: " + response.data.average_height;
      spaceFive.textContent = "Skin Color: " + response.data.skin_colors;
      spaceSix.textContent = "Hair Color: " + response.data.hair_colors;
      spaceSeven.textContent = "Eye Colors: " + response.data.eye_colors;
      spaceEight.textContent =
        "Average Lifespan: " + response.data.average_lifespan;
      spaceNine.textContent = "Home World: " + response.data.homeworld;
      spaceTen.textContent = "Language: " + response.data.language;
      spaceEleven.textContent = "";
      spaceTwelve.textContent = "";
      spaceThirteen.textContent = "";
    })
    .catch((error) => {
      spaceOne.textContent =
        "Sorry! Cannot display API at this time. Try again later";
    });
}
