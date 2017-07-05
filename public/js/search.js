

$("#search").on("click", function() {

    var race = $("#q1").val();
    var age = $("#q2").val();
    var state = $("#q3").val();
    var education = $("#q4").val();
    var gender = $("#q5").val();

    var currentLocation = window.location.href;

    console.log(currentLocation);
    var url = `/${race}/${age}/${state}/${education}/${gender}`;
    console.log(currentLocation + url);

    $.ajax({ url: currentLocation + url, method: "POST"})
            .done(function(data) {
                console.log(data);
            });

    return false;

});
