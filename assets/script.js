var dogImage = $("#dogImage");
var fact = $("#funFact");

// Function to search for a dog
function getDog(dog) {
    var apiUrl = "https://api.api-ninjas.com/v1/dogs?name=" + dog;
    $.ajax({
        url: apiUrl,
        method: "GET",
        headers: { 'X-Api-Key': 'WTXaKJgquUCyazX1kujz0Q==PRyhaahVdKYSQrYG' },
        contentType: 'application/json',
        success: function (result) {
            console.log(result);

            // Appends image to card
            var image = result[0].image_link;
            var imageEl = $("<img>");

            imageEl.attr("src", image);
            imageEl.attr("alt", result[0].name)
            dogImage.children("#img").append(imageEl);

            // Appends fun facts to card
            var drooling = result[0].drooling;
            var shedding = result[0].shedding;
            var barking = result[0].barking;
            var playfulness = result[0].playfulness;
            var energy = result[0].energy;

            $(".drooling").text("Drooling: " + drooling);
            $(".shedding").text("Shedding: " + shedding);
            $(".barking").text("Barking: " + barking);
            $(".playfulness").text("Playfulness: " + playfulness);
            $(".energy").text("Energy: " + energy);
            $(".card").removeClass("is-hidden");           
        
        }
    });
}

// Function to save searched dog to local storage and retrieve last searched dogs
function saveDog(dog) {
    var savedDogs = JSON.parse(localStorage.getItem("dogs"));

    if (!savedDogs) {
        savedDogs = [];
    }
    savedDogs.push(dog);

    localStorage.setItem("dogs", JSON.stringify(savedDogs));

    // Styling search dog button
    var dogButton = $("<button>");
    dogButton.attr("class", "button");
    dogButton.css("background-color", "rgb(115, 147, 178");
    dogButton.css("color", "white");
    dogButton.css("font-family", "Montserrat");
    dogButton.css("display", "block", "center");
    dogButton.css("margin-top", "7px");
    dogButton.text(dog);

    dogButton.on("click", function (event) {
        event.preventDefault();
        getDog(dog);
    })
    $("#searchHistory").append(dogButton);
}


function getname(){
    $.ajax({
        method: 'get',
        url: "https://randommer.io/api/Name?nameType=firstname&quantity=1",
        headers:{'X-Api-Key': 'fa076152de464fcab45e7657f043f76c'},
        contentType: 'application/json',
        success: function(result){
             console.log(result)       
                var name = result[0]
                $("#randomName").text(name)
        },
        error: function ajaxError(json) {
             console.error('Error: ', json.responseText);

        // Appends name to card
    }
})
}


// On click, calls getDog function
$("#searchButton").on("click", function (event) {
    event.preventDefault();
    var dog = $("#dogSearch").val();
    getDog(dog);
    saveDog(dog);
    getname();
})
