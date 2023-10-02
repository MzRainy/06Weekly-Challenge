
var APIKey = "cb6385549c670e15ff5e01918a6e5d35";
var city;
var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
fetch(queryURL);