var apiKey = "f4d2316cd893af3bab99aa493b1486ad"
var citySearch = $("#city-search");
var weatherEl = document.getElementById("weatherEl")
var cityInput = $("#city-input");
var randomChoice = $(".round")


function getWeather() {
    //added id of city-input to input field in html
    var cityInput = $("#city-input");
    var city = cityInput.val()
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"
    $("#ingredients").empty();
    
    fetch(queryURL)
      .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data.main.temp)
      var cityTemp=Math.round(data.main.temp)
      var cityName = data.name
      weatherEl.innerHTML = "<h2>The temperature in " + cityName + " is " + cityTemp + "\u00B0F.</h2>"
     


    if (cityTemp >= 85){
        var summerDrinks = ["Margarita", "Long Island Iced Tea", "Mojito", "Mai Tai",
        "Mint Julep", "Painkiller", "Tom Collins", "Pina Colada",
        "Moscow Mule", "Strawberry Daiquiri"]

        var cocktail = summerDrinks[Math.floor(Math.random()*summerDrinks.length)];
        console.log(cocktail)

    }else if (cityTemp < 85 && cityTemp > 65){
        var springDrinks = ["Negroni", "Manhattan", 'Abbey Cocktail', 'Angel Face', 'Aviation','Boomerang', 'Casino', 'Lemon Elderflower Spritzer']

        var cocktail = springDrinks[Math.floor(Math.random()*springDrinks.length)];
        console.log(cocktail)

        
    }else if (cityTemp < 65 && cityTemp > 45){
        var fallDrinks = ["Sidecar", "Dry Martini", "Applecar", "Cranberry Punch",
                        "Masala Chai","Mulled Wine","Spiced Peach Punch", "Corpse Reviver", 'Addison', "Martinez Cocktail"]

        var cocktail = fallDrinks[Math.floor(Math.random()*fallDrinks.length)];
        console.log(cocktail)
        
    } else {
        var winterDrinks = ["Hot Toddy", "Irish Coffee", "Orange Scented Hot Chocolate", "Hot Creamy Bush", "Rum Toddy", "Salted Toffee Martini"]

        var cocktail = winterDrinks[Math.floor(Math.random()*winterDrinks.length)];
        console.log(cocktail)

    }

        getDrink(cocktail);
    })
}


function getDrink(cocktail){
    
    var cocktailURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktail
    console.log(cocktailURL)

    fetch(cocktailURL)
    .then(function (response) {
        if (response.status !== 200){
            console.log("There is an issue")
            return;
        }
    return response.json();
    })
    .then(function (data) {
    console.log(data);

    console.log(data.drinks[0].strDrink)
    console.log(data.drinks[0].strDrinkThumb)
    console.log(data.drinks[0].strInstructions)

    document.getElementsByClassName("marketing-site-content-section")[0].style.backgroundColor ="initial"; 
    document.getElementById("comment").innerHTML="🌞🌞🍹<em><strong>Search again to find a different cocktail. Cheers! </strong></em>🍹🌞🌞";

    // in some div w/id of #drink-area
    var cocktailName = $("#drink-area");
    cocktailName.html("<h2>" + data.drinks[0].strDrink + "</h2>");
    // var cocktailName = $("<h3>");
    // cocktailName.html(data.drinks[0].strDrink);
    // console.log(cocktailName)
    // drinkDiv.append(cocktailName);

    var cocktailImg = $("#drink-img");
    cocktailImg.attr("src", data.drinks[0].strDrinkThumb)
    cocktailImg.attr("alt", data.drinks[0].strDrink + "drink image")

    $(".ingredients").html("Ingredients:")
    var cocktailIngredients = $("#ingredients");

    var cocktailDirections = $("#instructions")
    $(".instructions").html("Instructions:")
    cocktailDirections.html(data.drinks[0].strInstructions)

    for (var i = 1; i < 16; i++){
    if (data.drinks[0][`strIngredient${i}`] == null){
        break;
    }
    var ingredients = document.createElement("li");
    ingredients.innerHTML = data.drinks[0][`strMeasure${i}`] + " : " + data.drinks[0][`strIngredient${i}`]
    console.log(ingredients)

    cocktailIngredients.append(ingredients)
    }

    })


    // Store cocktailName in local storage
localStorage.setItem('cocktailName', cocktail);


// Retrieve cocktailName from local storage
const storedCocktailName = localStorage.getItem('cocktailName');

var unhide = document.getElementsByClassName("promotion-hero-links")[0]
unhide.removeAttribute("id");


// Create a new li element and set its text content to the stored cocktail name
const li = document.createElement('li');


li.textContent = storedCocktailName;


// Append the li element to the ul element with id "drinks-list"
const ul = document.getElementById('drinks-list');
ul.appendChild(li);
}


randomChoice.on("click", function(){
    var randomDrink = ["Margarita", "Long Island Iced Tea", "Mojito", "Mai Tai",
    "Mint Julep", "Painkiller", "Tom Collins", "Pina Colada",
    "Moscow Mule", "Strawberry Daiquiri", "Sidecar", "Dry Martini", "Applecar", "Cranberry Punch",
    "Masala Chai","Mulled Wine","Spiced Peach Punch", "Corpse Reviver", 'Addison', "Martinez Cocktail", 
    "Negroni", "Manhattan", 'Abbey Cocktail', 'Angel Face', 'Aviation','Boomerang', 'Casino', 'Lemon Elderflower Spritzer']

    var cocktail = randomDrink[Math.floor(Math.random()*randomDrink.length)];
    getDrink(cocktail);

})

citySearch.on("click", getWeather)


cityInput.on("keydown", function(event) {
    if (event.keyCode === 13) {
        getWeather();
        }
    })