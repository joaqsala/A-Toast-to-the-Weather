var apiKey = "f4d2316cd893af3bab99aa493b1486ad"
var citySearch = $("#city-search");
var weatherEl = document.getElementById("weatherEl")
var cityInput = $("#city-input");


function getWeather() {
    //added id of city-input to input field in html
    var cityInput = $("#city-input");
    var city = cityInput.val()
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"
    $("#ingredients").empty();
    
    fetch(queryURL)
      .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data)
      console.log(data.main.temp)
      var cityTemp=data.main.temp
      var cityName = data.name
      weatherEl.innerHTML = "<h2>The temperature in " + cityName + " is " + cityTemp + "\u00B0F.</h2>"
     


    if (cityTemp >= 85){
        var summerDrinks = ["Margarita", "Long Island Iced Tea", "Mojito", "Mai Tai",
        "Mint Julep", "Painkiller", "Tom Collins", "Pina Colada",
        "Moscow Mule", "Strawberry Daiquiri"]

        var cocktail = summerDrinks[Math.floor(Math.random()*summerDrinks.length)];
        console.log(cocktail)

        getDrink(cocktail);

    }if (cityTemp < 85 && cityTemp > 65){
        var springDrinks = ["Negroni", "Manhattan", 'Abbey Cocktail', 'Angel Face', 'Aviation','Boomerang', 'Singapore Sling', 'Casino', 'Blue Lagoon', 'Lemon Elderflower Spritzer']

        var cocktail = springDrinks[Math.floor(Math.random()*springDrinks.length)];
        console.log(cocktail)

        getDrink(cocktail);

        
    }if (cityTemp < 65 && cityTemp > 45){
        var fallDrinks = ["Sidecar", "Dry Martini", "Applecar","Apple Cider Punch #1", "Cranberry Punch",
                        "Masala Chai","Mulled Wine","Spiced Peach Punch", "Corpse Reviver", 'Adam & Eve', 'Addison', "Martinez Cocktail"]

        var cocktail = fallDrinks[Math.floor(Math.random()*fallDrinks.length)];
        console.log(cocktail)

        getDrink(cocktail);
        
    } else {
        var winterDrinks = ["Hot Toddy", "Irish Coffee", "Orange Scented Hot Chocolate", "Hot Creamy Bush", "Rum Toddy", "Salted Toffee Martini"]

        var cocktail = winterDrinks[Math.floor(Math.random()*winterDrinks.length)];
        console.log(cocktail)

        getDrink(cocktail);

    }});
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


    var cocktailIngredients = $("#ingredients");

    var cocktailDirections = $("#instructions")
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
    }


    citySearch.on("click", getWeather)



    cityInput.on("keydown", function(event) {
        if (event.keyCode === 13) {
          getWeather();
        }
      })