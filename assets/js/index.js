var apiKey = "f4d2316cd893af3bab99aa493b1486ad"
var citySearch = $("#city-search");


    



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


        // categories -
        //  Spring(65< warm < 85): ["Negroni", "Manhattan", 'Abbey Cocktail', 'Angel Face', 'Aviation','Boomerang', 'Singapore Sling', 'Casino', 'Blue Lagoon', 'Lemon Elderflower Spritzer']
        //  Summer(hot >= 85): ["Margarita", "Long Island Iced Tea", "Mojito", "Mai Tai",
        //                    "Mint Julep", "Painkiller", "Tom Collins", "Pina Colada",
        //                    "Moscow Mule", 'Strawberry Daiquiri', ]
        //  Fall(45 < cool < 65): ["Sidecar", "Dry Martini","Applecar","Apple Cider Punch #1", "Cranberry Punch",
        //                    "Masala Chai","Mulled Wine","Spiced Peach Punch", "Corpse Reviver", 'Adam & Eve', 'Addison', Martinez Cocktail']
        //  Winter(cold <= 45): [ "Hot Toddy", "Irish Coffee", "Orange Scented Hot Chocolate", "Hot Creamy Bush", "Rum Toddy", "Melya",
        //                "Salted Toffee Martini"]



      });
    }

    citySearch.on("click", getWeather)











    // function ingredientGin(){
    //     var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin"
    
    //     fetch(queryURL)
    //         .then(function (response) {
    //             if (response.status !== 200){
    //                 console.log("There is an issue")
    //                 return;
    //             }
    //         return response.json();
    //           })
    //         .then(function (data) {
    //         console.log(data);
          
    //          } )
    // };

//     ingredientGin();


// function randomCocktail(){
//     var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

//     fetch(queryURL)
//         .then(function (response) {
//             if (response.status !== 200){
//                 console.log("There is an issue")
//                 return;
//             }
//         return response.json();
//           })
//         .then(function (data) {
//         console.log(data);
//         displayRandom(data);
//          } )
// };



function nameCocktail(){
    var queryURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tom collins"

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

    for (var i = 1; i < 16; i++){
    if (data.drinks[0][`strIngredient${i}`] == null){
        break;
    }
    var ingredients = document.createElement("li");
    ingredients.innerHTML = data.drinks[0][`strMeasure${i}`] + " : " + data.drinks[0][`strIngredient${i}`]
    console.log(ingredients)

    cocktailIngredients.append(ingredients)
    

    var cocktailDirections = $("#instructions")
    cocktailDirections.html(data.drinks[0].strInstructions)
    }

        })
    }
nameCocktail()

// function displayRandom(cocktail) {
//     console.log(cocktail);
//     console.log(cocktail.drinks[0].strDrink)
//     console.log(cocktail.drinks[0].strDrinkThumb)
//     console.log(cocktail.drinks[0].strInstructions)

    //in some div w/id of #drink-section
    // var drinkDiv = $(#drink-section)
    // var cocktailName = $('h2')
    // cocktailName.html(cocktail.drinks[0].strDrink)
    // drinkDiv.append(cocktailName)

    // var img = $('img').src(cocktail.drinks[0].strDrinkThumb)  -- check jquery code?
    // drinkDiv.append(cocktailName)

    //for (var i = 1; i < 16; i++){
    // if (cocktail.drinks[0][`strIngredients${i}` == null]){
        // break;
    // }
    //  var ingredient = $('li').html(cocktail.drinks[0][`strMeasure${i}`]+ " : " + cocktail.drinks[0][`strIngredients${i}`] )
    // drinkDiv.append(ingredient) 

    //}
 
        //var cocktailDirections = $('p').html(cocktail.drinks[0].strInstructions)
        //drinkDiv.append(cocktailDirections)
    // }

// randomCocktail()


