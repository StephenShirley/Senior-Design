
//Info is a json object containing flight information.
//This function will dynamically display the information instead of trying to manually change it all.
var displayInfo = function (info) {
    var airportObj = JSON.parse(info)[0].airport;
    $('#displayBox').html("");
    $('#displayBox').append('<p><ul>')
    $('#displayBox').append('<li><strong>Name</strong>: ' + airportObj.name + '</li>');
    $('#displayBox').append('<li><strong>Location</strong>: ' + airportObj.city + ', ' + airportObj.state + '</li>');
    $('#displayBox').append('<li><strong>UTC</strong>: ' + airportObj.utc + '</li>');
    $('#displayBox').append('<li><strong>Precheck</strong>: ' + airportObj.precheck + '</li>');

    $('#displayBox').append('</ul></p>')

    $.each(airportObj, function (index, val) {
    })
}

var getTsaCheckpoint = function (shortcodeInput) {
    $.get("/Home/getTsaCheckpoint", {shortcode: shortcodeInput}, function (data, textStatus, XQHR) {
        console.log(data);
        console.log(textStatus);
        displayInfo(data);

    }).error(function(data, text) {
        console.log(data);
    });
}



$('body').on('click', '#searchBtn', function () {
    var input = $('#shortcodeInput').val();
    getTsaCheckpoint(input);
})