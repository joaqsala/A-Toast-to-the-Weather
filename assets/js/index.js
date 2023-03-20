



function getWeather() {
    //added class of city-input to input field in html
    var cityInput = $("#city-input");
    var city = cityInput.val()
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"
    
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });
    }






function randomCocktail(){
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    fetch(queryURL)
        .then(function (response) {
            if (response.status !== 200){
                console.log("There is an issue")
                return;
            }
        return response.json();
          })
        .then(function (data) {
        console.log(data);
        displayRandom(data);
         } )
};

function displayRandom(cocktail) {
    console.log(cocktail);
    console.log(cocktail.drinks[0].strDrink)
    console.log(cocktail.drinks[0].strDrinkThumb)
    console.log(cocktail.drinks[0].strInstructions)



    }

randomCocktail()


