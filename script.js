var peopleBtn = document.querySelector("#people");
var filmsBtn = document.querySelector("#films");
var starshipsBtn = document.querySelector("#starships");
var vehiclesBtn = document.querySelector("#vehicles");
var speciesBtn = document.querySelector("#species");
var planetsBtn = document.querySelector("#planets");
var quotesBtn = document.querySelector("#quotes");


peopleBtn.addEventListener("click", generateApiSearch);
filmsBtn.addEventListener("click", generateApiSearch);
starshipsBtn.addEventListener('click', generateApiSearch);
vehiclesBtn.addEventListener('click', generateApiSearch);
speciesBtn.addEventListener('click', generateApiSearch);
planetsBtn.addEventListener('click', generateApiSearch);
quotesBtn.addEventListener('click', generateQuotesSearch);

function generateApiSearch (event) {
    console.log(event)
    //console.log(event.path[0].outerText);
    var searchEl = (event.path[0].outerText);
    if (searchEl == "People"){
        var random = Math.floor(Math.random() * 82);
        var starWarsEl = ("people/" + random);
        console.log (starWarsEl)
        searchPeople (starWarsEl);

        //aj's function
    }
    if (searchEl == "Films"){
        var random = Math.floor(Math.random() * 6);
        var starWarsEl = ("films/"+ random);
        console.log (starWarsEl)
        searchFilms (starWarsEl)
        //aj's function
    }
    if (searchEl == "Starships"){
        var random = Math.floor(Math.random() * 36)
        var starWarsEl = ("starships/" + random);
        console.log (starWarsEl)
        searchStarships (starWarsEl)
        //aj's function
    }
    if (searchEl == "Vehicles"){
        var random = Math.floor(Math.random() * 39)
        var starWarsEl = ("vehicles/" + random);
        console.log (starWarsEl)
        searchVehicles (starWarsEl)
        //aj's function
    }
    if (searchEl == "Species"){
        var random = Math.floor(Math.random() * 37)
        var starWarsEl = ("species/" + random);
        console.log (starWarsEl)
        searchSpecies (starWarsEl)
        //aj's function
    }
    if (searchEl == "Planets"){
        var random = Math.floor(Math.random() * 60)
        var starWarsEl = ("planets/" + random);
        console.log (starWarsEl)
        searchPlanets(starWarsEl)
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
  console.log (starWarsEl);
  fetch("https://swapi.dev/api/" + starWarsEl + "/")
      .then(function (response) { 
        response.json().then(function (data) {
    console.log(data);
    catDisplay.textContent = "People Output"
    spaceOne.textContent = "Name: " + data.name;
    spaceTwo.textContent =
      "Birth Year: " + data.birth_year;
    spaceThree.textContent = ""
    spaceFour.textContent = ""
    spaceFive.textContent = "Gender: " + data.gender;
    spaceSix.textContent = "Height: " + data.height;
    spaceSeven.textContent = "Weight: " + data.mass;
    spaceEight.textContent =
      "Hair color: " + data.hair_color;
    spaceNine.textContent =
      "Skin color: " + data.skin_color;
    spaceTen.textContent = "Eye color: " + data.eye_color;
    // axios.get(response.data.results[0].vehicles).then(function (response) {
    //   console.log(response)
    // })

    spaceEleven.textContent = ""
    spaceTwelve.textContent = ""
    spaceThirteen.textContent = ""
  // }).catch(error =>{
  //     spaceOne.textContent = "Sorry! Cannot display API at this time. Try again later"
    }) ;
  });
  };

// this function searches the star wars api for planets and displays the data
function searchPlanets(starWarsEl) {
  fetch("https://swapi.dev/api/" + starWarsEl + "/")
      .then(function (response) { 
        response.json().then(function (data) {
    console.log(data);
    catDisplay.textContent = "Planets Output"
    spaceOne.textContent = "Name: " + data.name;
    spaceTwo.textContent =
      "Population: " + data.population;
    spaceThree.textContent = "Climate: " + data.climate;
    spaceFour.textContent = "Terrain: " + data.terrain;
    spaceFive.textContent = "Diameter: " + data.diameter;
    spaceSix.textContent = "Gravity: " + data.gravity;
    spaceSeven.textContent =
      "Rotational Period: " + data.rotation_period;
    spaceEight.textContent =
      "Orbital Period: " + data.orbital_period;
    spaceNine.textContent =
      "Surface Water: " + data.surface_water;
    spaceTen.textContent = ""
    spaceEleven.textContent = ""
    spaceTwelve.textContent = ""
    spaceThirteen.textContent = ""
  // }).catch(error =>{
  //   spaceOne.textContent = "Sorry! Cannot display API at this time. Try again later"
  }) ;
});
};

// this function searches the star wars api for films and displays the data
function searchFilms(starWarsEl) {
  fetch("https://swapi.dev/api/" + starWarsEl + "/")
      .then(function (response) { 
        response.json().then(function (data) {
    console.log(data);
    catDisplay.textContent = "Films Output"
    spaceOne.textContent = "Title: " + data.title;
    spaceTwo.textContent = "Episode Number: " + data.episode_id;
    spaceThree.textContent = "Director: " + data.director;
    spaceFour.textContent = "Producers: " + data.producer;
    spaceFive.textContent = "Release Date: " + data.release_date;
    spaceSix.textContent = "Opening Crawl: " + data.opening_crawl;
    spaceSeven.textContent = ""
    spaceEight.textContent = ""
    spaceNine.textContent = ""
    spaceTen.textContent = ""
    spaceEleven.textContent = ""
    spaceTwelve.textContent = ""
    spaceThirteen.textContent = ""
  // }).catch(error =>{
  //   spaceOne.textContent = "Sorry! Cannot display API at this time. Try again later"
  }) ;
});
};
// this function searches the star wars api for starships and displays the data
function searchStarships(starWarsEl) {
  fetch("https://swapi.dev/api/" + starWarsEl + "/")
      .then(function (response) { 
        response.json().then(function (data) {
    console.log(data);
    catDisplay.textContent = "Starships Output"
    spaceOne.textContent = "Starship: " + data.name;
    spaceTwo.textContent =
      "Manufacturer: " + data.manufacturer;
    spaceThree.textContent = "Model: " + data.model;
    spaceFour.textContent = "Cost: " + data.cost_in_credits;
    spaceFive.textContent = "Crew: " + data.crew;
    spaceSix.textContent = "Passengers: " + data.passengers;
    spaceSeven.textContent =
      "Cargo Capacity: " + data.cargo_capacity;
    spaceEight.textContent =
      "Hyperdrive Rating: " + data.hyperdrive_rating;
    spaceNine.textContent = ""
    spaceTen.textContent = ""
    spaceEleven.textContent = ""
    spaceTwelve.textContent = ""
    spaceThirteen.textContent = ""
  // }).catch(error =>{
  //   spaceOne.textContent = "Sorry! Cannot display API at this time. Try again later"
  }) ;
});
};

// this function searches the star wars api for vehicles and displays the data
function searchVehicles(starWarsEl) {
  fetch("https://swapi.dev/api/" + starWarsEl + "/")
      .then(function (response) { 
        response.json().then(function (data) {
    console.log(response);
    catDisplay.textContent = "Vehicles Output"
    spaceOne.textContent = "Vehicle: " + data.name;
    spaceTwo.textContent = "Model: " + data.model;
    spaceThree.textContent =
      "Manufacturer: " + data.manufacturer;
    spaceFour.textContent = "Cost: " + data.cost_in_credits;
    spaceFive.textContent = "Crew: " + data.crew;
    spaceSix.textContent = "Passengers: " + data.passengers;
    spaceSeven.textContent =
      "Cargo Capacity: " + data.cargo_capacity;
    spaceEight.textContent = "Vehicle Class: " + data.vehicle_class;
    spaceNine.textContent =
      "Consumables: " + data.consumables;
    spaceTen.textContent = ""
    spaceEleven.textContent = ""
    spaceTwelve.textContent = ""
    spaceThirteen.textContent = ""
  // }).catch(error =>{
  //   spaceOne.textContent = "Sorry! Cannot display API at this time. Try again later"
  }) ;
});
};

// this function searches the star wars api for species and displays the data
function searchSpecies(starWarsEl) {
  fetch("https://swapi.dev/api/" + starWarsEl + "/")
      .then(function (response) { 
        response.json().then(function (data) {

    console.log(data);
    catDisplay.textContent = "Species Output"
    spaceOne.textContent = "Species: " + data.name;
    spaceTwo.textContent =
      "Classification: " + data.classification;
    spaceThree.textContent = "Designation: " + data.designation;
    spaceFour.textContent =
      "Average Height: " + data.average_height;
    spaceFive.textContent = "Skin Color: " + data.skin_colors;
    spaceSix.textContent = "Hair Color: " + data.hair_colors;
    spaceSeven.textContent = "Eye Colors: " + data.eye_colors;
    spaceEight.textContent =
      "Average Lifespan: " + data.average_lifespan;
    spaceNine.textContent = ""
    spaceTen.textContent = "Language: " + data.language;
    spaceEleven.textContent = ""
    spaceTwelve.textContent = ""
    spaceThirteen.textContent = ""
  // }).catch(error =>{
  //   spaceOne.textContent = "Sorry! Cannot display API at this time. Try again later"
}) ;
});
};

var randomQuote = document.getElementById("randomQuote");
function generateQuotesSearch(){
  fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
  .then(function (response) { 
    response.json().then(function (data) {
    console.log(data);
    randomQuote.textContent = data.content
    
    });
});
};




function renderEnlisted() {
  removeAllChildNodes(factionContainerEl);
  var faction = localStorage.getItem("faction");
  console.log(faction + " hello there");
  
  if (faction == "Empire") {
    icon = document.createElement('img');
    icon.src = './images/empire.png'
    factionContainerEl.appendChild(icon);
    icon.style.width = "250px";
  }
  if (faction == "Rebels") {
    icon = document.createElement('img');
    icon.src = './images/rebels.png'
    factionContainerEl.appendChild(icon);
    icon.style.width = "250px";
    }
    else {
      return;
    }

};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}


//email submit and enlist
var emailInput = document.querySelector("#email");
var factionInput = document.querySelector("#faction");
var enlistBtn = document.querySelector("#enlist");

var factionContainerEl = document.querySelector('#faction-container');

enlistBtn.addEventListener("click", function(event) {
  event.preventDefault();
  var email = document.querySelector("#email").value;
  var faction = document.querySelector("#faction").value;
  console.log(email);
  console.log(faction);


  localStorage.setItem("email", email);
  localStorage.setItem("faction", faction);
  renderEnlisted();

});

function init () {
  renderEnlisted();
}

init ();
