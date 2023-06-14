var boat;
(function (boat) {
    boat[boat["engine"] = 2] = "engine";
    boat[boat["bow"] = 1] = "bow";
    boat[boat["stern"] = 1] = "stern";
})(boat || (boat = {}));
var number0FEngine = boat.engine;
console.log(number0FEngine);
