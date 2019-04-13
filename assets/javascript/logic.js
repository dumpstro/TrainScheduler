//jsummers firebase
var config = {
    apiKey: "AIzaSyDemb0N0pYK1XXDoJU0T8Uojz28I6azkYI",
    authDomain: "first-database-22273.firebaseapp.com",
    databaseURL: "https://first-database-22273.firebaseio.com",
    projectId: "first-database-22273",
    storageBucket: "first-database-22273.appspot.com",
    messagingSenderId: "694221356845"
};

firebase.initializeApp(config);

var database = firebase.database();

$("#submitTrain").on("click", function() {
    event.preventDefault();
    alert("I've been clicked")
    var trainName = $("#addedName").val().trim();

    var newTrain = {
        name: trainName
    }

    database.ref().push(newTrain);

    $("#addedName").val("");
});

$("#trainName").text(name);

//database.ref().push({

//	name: name,
//	role: role,
//	startDate: startDate,
//	rate: monthlyRate,
//	dateAdded: firebase.database.ServerValue.TIMESTAMP 
//	
//});

//database.ref().on("child_added", function(childsnapshot) {
// 
//    $("#name-display").append(childsnapshot.val().name
//    $("#role-display").append(childsnapshot.val().role
//    $("#startDate-display").append(childsnapshot.val().startDate
//    $("#monthlyRate-display").append(childsnapshot.val().rate
//
//});