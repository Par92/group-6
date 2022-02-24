// selector and event listener for search people button
var buttonPeople = document.getElementById("buttonPeople");
buttonPeople.addEventListener("click", searchPeople);
//selector and event listener for the search planets button
var buttonPlanets = document.getElementById("buttonPlanets");
buttonPlanets.addEventListener("click", searchPlanets);
// selector and event listener for the search planets button
var buttonFilms = document.getElementById("buttonFilms");
buttonFilms.addEventListener("click", searchFilms);
// selector and event listener for the search starships button
var buttonStarships = document.getElementById("buttonStarships");
buttonStarships.addEventListener("click", searchStarships);
//selector and event listener for the search vehicles button
var buttonVehicles = document.getElementById("buttonVehicles");
buttonVehicles.addEventListener("click", searchVehicles);
//selector and event listener for the search species button
var buttonSpecies = document.getElementById("buttonSpecies");
buttonSpecies.addEventListener("click", searchSpecies);

//declaring variables for the people and attributes
var starName = document.getElementById("starName");
var birthYear = document.getElementById("birthYear");
var homeWorld = document.getElementById("homeWorld");
var species = document.getElementById("species");
var gender = document.getElementById("gender");
var height = document.getElementById("height");
var mass = document.getElementById("mass");
var hairColor = document.getElementById("hairColor");
var skinColor = document.getElementById("skinColor");
var eyeColor = document.getElementById("eyeColor");
var vehicles = document.getElementById("vehicles");
var starships = document.getElementById("starships");
var films = document.getElementById("films");

//declaring variables for the planets and attributes
var planetName = document.getElementById("planetName");
var population = document.getElementById("population");
var climate = document.getElementById("climate");
var terrain = document.getElementById("terrain");
var diameter = document.getElementById("diameter");
var gravity = document.getElementById("gravity");
var rotationPeriod = document.getElementById("rotationPeriod");
var oribtalPeriod = document.getElementById("oribtalPeriod");
var surfaceWater = document.getElementById("surfaceWater");

//declaring variables for the films and attributes
var filmTitle = document.getElementById("filmTitle");
var episodeID = document.getElementById("episodeID");
var director = document.getElementById("director");
var producers = document.getElementById("producers");
var releaseDate = document.getElementById("releaseDate");
var openingCrawl = document.getElementById("openingCrawl");

//declaring variables for the starships and attributes
var starshipName = document.getElementById("starshipName");
var starshipManufacturer = document.getElementById("starshipManufacturer");
var starshipModel = document.getElementById("starshipModel");
var starshipCost = document.getElementById("starshipCost");
var starshipCrew = document.getElementById("starshipCrew");
var starshipPassengers = document.getElementById("starshipPassengers");
var shipCargoCapacity = document.getElementById("shipCargoCapacity");
var hyperdriveRating = document.getElementById("hyperdriveRating");

//declaring variables for the vehicles and attributes
var vehicleName = document.getElementById("vehicleName");
var vehicleModel = document.getElementById("vehicleModel");
var vehicleManufacturer = document.getElementById("vehicleManufacturer");
var vehicleCost = document.getElementById("vehicleCost");
var vehicleCrew = document.getElementById("vehicleCrew");
var vehiclePassengers = document.getElementById("vehiclePassengers");
var vehicleCargoCapacity = document.getElementById("vehicleCargoCapacity");
var vehicleClass = document.getElementById("vehicleClass");
var vehicleConsumables = document.getElementById("vehicleConsumables");

//declaring variables for the species and attributes
var speciesName = document.getElementById("speciesName");
var speciesClass = document.getElementById("speciesClass");
var designation = document.getElementById("designation");
var averageHeight = document.getElementById("averageHeight");
var speciesSkinColors = document.getElementById("speciesSkinColors");
var speciesHairColors = document.getElementById("speciesHairColors");
var speciesEyeColors = document.getElementById("speciesEyeColors");
var averageLifespan = document.getElementById("averageLifespan");
var speciesHomeWorld = document.getElementById("speciesHomeWorld");
var speciesLanguage = document.getElementById("speciesLanguage");

//this function searches the star wars api for people and displays the data
function searchPeople() {
  axios.get("https://swapi.dev/api/people/?").then(function (response) {
    console.log(response);
    starName.textContent = "Name: " + response.data.results[0].name;
    birthYear.textContent =
      "Birth Year: " + response.data.results[0].birth_year;
    homeWorld.textContent = "Home World: " + response.data.results[0].homeworld;
    species.textContent = "Species: " + response.data.results[0].species[0];
    gender.textContent = "Gender: " + response.data.results[0].gender;
    height.textContent = "Height: " + response.data.results[0].height;
    mass.textContent = "Weight: " + response.data.results[0].mass;
    hairColor.textContent =
      "Hair color: " + response.data.results[0].hair_color;
    skinColor.textContent =
      "Skin color: " + response.data.results[0].skin_color;
    eyeColor.textContent = "Eye color: " + response.data.results[0].eye_color;
    // axios.get(response.data.results[0].vehicles).then(function (response) {
    //   console.log(response)
    // })

    vehicles.textContent = "Vehicles: " + response.data.results[0].vehicles;
    starships.textContent = "Starships: " + response.data.results[0].starships;
    films.textContent = "Films" + response.data.results[0].films;
  }).catch(error =>{
      starName.textContent = "Sorry! Cannot display API at this time. Try again later"
  }) 
}

// this function searches the star wars api for planets and displays the data
function searchPlanets() {
  axios.get("https://swapi.dev/api/planets/?").then(function (response) {
    console.log(response);
    planetName.textContent = "Name: " + response.data.results[0].name;
    population.textContent =
      "Population: " + response.data.results[0].population;
    climate.textContent = "Climate: " + response.data.results[0].climate;
    terrain.textContent = "Terrain: " + response.data.results[0].terrain;
    diameter.textContent = "Diameter: " + response.data.results[0].diameter;
    gravity.textContent = "Gravity: " + response.data.results[0].gravity;
    rotationPeriod.textContent =
      "Rotational Period: " + response.data.results[0].rotation_period;
    oribtalPeriod.textContent =
      "Orbital Period: " + response.data.results[0].orbital_period;
    surfaceWater.textContent =
      "Surface Water: " + response.data.results[0].surface_water;
  }).catch(error =>{
    planetName.textContent = "Sorry! Cannot display API at this time. Try again later"
}) ;
}

// this function searches the star wars api for films and displays the data
function searchFilms() {
  axios.get("https://swapi.dev/api/films/1/").then(function (response) {
    console.log(response);
    filmTitle.textContent = "Title: " + response.data.title;
    episodeID.textContent = "Episode Number: " + response.data.episode_id;
    director.textContent = "Director: " + response.data.director;
    producers.textContent = "Producers: " + response.data.producer;
    releaseDate.textContent = "Release Date: " + response.data.release_date;
    openingCrawl.textContent = "Opening Crawl: " + response.data.opening_crawl;
  }).catch(error =>{
    filmTitle.textContent = "Sorry! Cannot display API at this time. Try again later"
}) ;
}
// this function searches the star wars api for starships and displays the data
function searchStarships() {
  axios.get("https://swapi.dev/api/starships/9/").then(function (response) {
    console.log(response);
    starshipName.textContent = "Starship: " + response.data.name;
    starshipManufacturer.textContent =
      "Manufacturer: " + response.data.manufacturer;
    starshipModel.textContent = "Model: " + response.data.model;
    starshipCost.textContent = "Cost: " + response.data.cost_in_credits;
    starshipCrew.textContent = "Crew: " + response.data.crew;
    starshipPassengers.textContent = "Passengers: " + response.data.passengers;
    shipCargoCapacity.textContent =
      "Cargo Capacity: " + response.data.cargo_capacity;
    hyperdriveRating.textContent =
      "Hyperdrive Rating: " + response.data.hyperdrive_rating;
  }).catch(error =>{
    starshipName.textContent = "Sorry! Cannot display API at this time. Try again later"
}) ;
}

// this function searches the star wars api for vehicles and displays the data
function searchVehicles() {
  axios.get("https://swapi.dev/api/vehicles/4/").then(function (response) {
    console.log(response);
    vehicleName.textContent = "Vehicle: " + response.data.name;
    vehicleModel.textContent = "Model: " + response.data.model;
    vehicleManufacturer.textContent =
      "Manufacturer: " + response.data.manufacturer;
    vehicleCost.textContent = "Cost: " + response.data.cost_in_credits;
    vehicleCrew.textContent = "Crew: " + response.data.crew;
    vehiclePassengers.textContent = "Passengers: " + response.data.passengers;
    vehicleCargoCapacity.textContent =
      "Cargo Capacity: " + response.data.cargo_capacity;
    vehicleClass.textContent = "Vehicle Class: " + response.data.vehicle_class;
    vehicleConsumables.textContent =
      "Consumables: " + response.data.consumables;
  }).catch(error =>{
    vehicleName.textContent = "Sorry! Cannot display API at this time. Try again later"
}) ;
}

// this function searches the star wars api for species and displays the data
function searchSpecies() {
  axios.get("https://swapi.dev/api/species/3/").then(function (response) {
    console.log(response);
    speciesName.textContent = "Species: " + response.data.name;
    speciesClass.textContent =
      "Classification: " + response.data.classification;
    designation.textContent = "Designation: " + response.data.designation;
    averageHeight.textContent =
      "Average Height: " + response.data.average_height;
    speciesSkinColors.textContent = "Skin Color: " + response.data.skin_colors;
    speciesHairColors.textContent = "Hair Color: " + response.data.hair_colors;
    speciesEyeColors.textContent = "Eye Colors: " + response.data.eye_colors;
    averageLifespan.textContent =
      "Average Lifespan: " + response.data.average_lifespan;
    speciesHomeWorld.textContent = "Home World: " + response.data.homeworld;
    speciesLanguage.textContent = "Language: " + response.data.language;
  }).catch(error =>{
    speciesName.textContent = "Sorry! Cannot display API at this time. Try again later"
}) ;
}
