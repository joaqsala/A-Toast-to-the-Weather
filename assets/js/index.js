



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



         } )
}

randomCocktail()


