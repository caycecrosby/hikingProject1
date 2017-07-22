var name = "?s=margarita";
var ingredient = "";
var type = "search";




var lookup = type + ".php" + name + ingredient;

var queryURL = "http://www.thecocktaildb.com/api/json/v1/1/" + lookup;
    
$.ajax({
    url: queryURL,
    method: "GET"
}).done(function(response) {
    console.log(response);

    var results = response.drinks;

    for (var i = 0; i < results.length; i++) {
    	// creates a div to hold the drink info
    	var drinkDiv = $("<div class='drink'>");
    	// retrieves the drink name
    	var drinkName = response.drinks.strDrink;
    	//creates an element to display the name
    	var nameDisplay = $("<p>").text(drinkName);
    	// displays the drink name
    	drinkDiv.append(nameDisplay);
    	// creates an element to display the ingredients
    	var ingredientDisplay = $("<div class = ingredients>").text("Ingredients:");
    	//works some evil magic to get the ingredients to show up
    	for (var j = 0; j < 10; j++){
    		var ingredientName = response.drinks.strIngredient[j];
    		var ingredientMeasure = response.drinks.strMeasure[j]
    		// appends ingredients and measurements to the ingredient display
    		ingredientDisplay.append(ingredientName);
    		ingredientDisplay.append(ingredientMeasure);
    	}
    	drinkDiv.append(ingredientDisplay);
    	// retrieves the instructions
    	var instrucs = response.drinks.strInstructions;
    	// creates an element to display the instructions
    	var instrucDisplay = $("<p>").text("Instructions: " + instrucs);
    	drinkDiv.append(instrucDisplay);

    	
    }

});
