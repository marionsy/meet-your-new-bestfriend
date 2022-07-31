// Reminder: Ctrl + Click a url to open it in your browser
// Dog API documentation link: https://api-ninjas.com/api/dogs
var dog = "Dachshund"
    $.ajax({
        method: 'get',
        url: "https://api.api-ninjas.com/v1/dogs?name=" + dog,
        headers:{'X-Api-Key': 'WTXaKJgquUCyazX1kujz0Q==PRyhaahVdKYSQrYG'},
        contentType: 'application/json',
        success: function(result){
            console.log(result)
        },
        error: function ajaxError(json) {
            console.error('Error: ', json.responseText);
        }
    })

var dog2 = "German Shepherd"
$.ajax({
    method: 'get',
    url: "https://api.api-ninjas.com/v1/dogs?name=" + dog2,
    headers:{'X-Api-Key': 'WTXaKJgquUCyazX1kujz0Q==PRyhaahVdKYSQrYG'},
    contentType: 'application/json',
    success: function(result){
        console.log(result)
    },
    error: function ajaxError(json) {
        console.error('Error: ', json.responseText);
    }
})
// name API documentation https://randommer.io/api/docs/index.html#tag/Name
    var name = "https://randommer.io/api/Name?nameType=firstname&quantity=1"

// Dropdown Menu
function dogSelection(){
    document.getElementById('dropdown').classList.toggle('show')
}
window.onclick = function(event){
    if 
    (!event.target.matches('.dropdown-button')){
        var dropdowns =
        document.getElementsByClassName('dropdown-content');
            var i;
            for (i = 0; i < dropdowns.length; i++){
                var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')){
                        openDropdown.classList.remove('show');
                    }
            }
    }
}