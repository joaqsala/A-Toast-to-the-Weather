



function getWeather() {
    //added id of city-input to input field in html
    var cityInput = $("#city-input");
    var city = cityInput.val()
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=imperial"
    
    fetch(queryURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        //insert conditions so that data.main.temp leads to a range of temps,
        //that can then be used to query for a cocktail

      });
    }


    function ingredientGin(){
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
    
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
          
             } )
    };

    ingredientGin()

    function ingredientVodka(){
        var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=whiskey"
    
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
          
             } )
    };

    ingredientVodka()


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

    //in some div w/id of #drink-section
    // var drinkDiv = $(#drink-section)
    // var cocktailName = $('h2')
    // cocktailName.html(cocktail.drinks[0].strDrink)
    // drinkDiv.append(cocktailName)

    // var img = $('img').src(cocktail.drinks[0].strDrinkThumb)  -- check jquery code?
    // drinkDiv.append(cocktailName)

    //for (var i = 1, i < 16, i++){
    // if (cocktail.drinks[0][`strIngredients${i}` == null]){
        // break;
    // }
    //  var ingredient = $('li').html(cocktail.drinks[0][`strMeasure${i}`]+ " : " + cocktail.drinks[0][`strIngredients${i}`] )
    // drinkDiv.append(ingredient) 

    //}
 
        //var cocktailDirections = $('p').html(cocktail.drinks[0].strInstructions)
        //drinkDiv.append(cocktailDirections)
    }

randomCocktail()


