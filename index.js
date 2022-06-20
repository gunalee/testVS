$("h1").css("font-size","5rem");

$(document).keypress(function(event){
    $("h1").text(event.key);
});

