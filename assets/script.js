// Gets references to elements
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

            if (result.length === 0) {
                $(".modal").addClass('is-active');
            } else {
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
            }
        }
    });
}

// Function to save searched dog to local storage and retrieve last searched dogs
function saveDog(dog) {
    var savedDogs = JSON.parse(localStorage.getItem("dogs"));

    if (!savedDogs) {
        savedDogs = [];
    }

    // Will retrieve last searched dog
    savedDogs.push(dog);
    var id = savedDogs.length - 1;

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
        $("#randomName").text(getSavedName(id));
    })
    $("#searchHistory").append(dogButton);
}

// Appends first and last name to card
function getName() {
    $.ajax({
        method: "GET",
        url: "https://randomuser.me/api/?nat=us",
        contentType: 'application/json',
        success: function (result) {
            console.log(result);

            var firstName = result.results[0].name.first;

            // Array to store random last names
            var lastNames = ["Wooferson", "Barkley", "Pawter", "Barksalot", "Shakespaw", "Skybarker", "Escobark", "Doggi-dog", "Houndini", "Degeneruff", "Eisenhowler", "Cumberbark", "Poo-chino", "Pawsborne", "Waguilera", "Puppins"];
            var lastName = lastNames[Math.floor(Math.random() * lastNames.length)];

            var randomName = firstName + " " + lastName;
            $("#randomName").text(randomName);
            saveName(randomName);

            // If modal isn't active, displayes image and name
            if (!$(".modal").hasClass("is-active")) {
                $(".card").removeClass("is-hidden");
            }
        }
    })
}

// Function to save name to local storage
function saveName(name) {
    var savedNames = JSON.parse(localStorage.getItem("names"));

    if (!savedNames) {
        savedNames = [];
    }
    savedNames.push(name);

    localStorage.setItem("names", JSON.stringify(savedNames));
}

// Calls API to get dog info and random name
function getDogAndRandomName(dog) {
    getName();
    getDog(dog);
    saveDog(dog);
}

// Gets saved name from local storage
function getSavedName(id) {
    var savedNames = JSON.parse(localStorage.getItem("names"));
    return savedNames[id];
}

// On click, gets dog and random name
$("#searchButton").on("click", function (event) {
    event.preventDefault();
    var dog = $("#dogSearch").val();
    getDogAndRandomName(dog);
});

// On enter keyup event, gets dog and random name
$(".input").on("keyup", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        var dog = $("#dogSearch").val();
        getDogAndRandomName(dog);
    }
});

// Removes modal class is active 
$('.modal').on('click', function () {
    $(".modal").removeClass('is-active');
    $("#dogSearch").val('');
})
