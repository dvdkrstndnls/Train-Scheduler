  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDxA9tnWsZfl75Ms-GNgNYcHN78W9rm6Hk",
    authDomain: "train-schedule-5efe9.firebaseapp.com",
    databaseURL: "https://train-schedule-5efe9.firebaseio.com",
    projectId: "train-schedule-5efe9",
    storageBucket: "",
    messagingSenderId: "71267407443"
  };
  firebase.initializeApp(config);



//click handler
$("button").on("click", function(){
// button works?
	console.log("hello");

    // here we define variables needed for 'Add Train' table
	var trainName = $("#train-name").val();
	var destination = $("#train-destination").val();
	var firstTrainTime = $("#first-train-time").val();
	var frequencyMin = $("#frequency-name").val();

    // working?
	console.log(trainName);
	console.log(destination);
	console.log(firstTrainTime);
	console.log(frequencyMin);

    // push to Firebase - let's talk!
	database.ref().push({
		keyTrainName: trainName,
		keyDestination: destination,
		keyFirstTrainTime: firstTrainTime,
		keyFrequencyMin: frequencyMin,

	});

});



database.ref().on("child_added", function(snapshot) {  // is something wrong here? not working...

	
var now = moment();	
// next arrival = THIS LINE NEEDS HELP! DONT KNOW HOW TO FORMAT OR WHAT EQUATION TO USE, maybe first train time + array containing every train time 
	var nextArrival = moment().diff(snapshot.val().firstTrainTime , "what goes here?? maybe nothing");

// here we code the following : minutes away = next arrival - now (or what is the difference between var now and var nextArrival) I THINK THIS LINE IS CORRECT
	var minutesAway = moment.minutesAway(now.diff(nextArrival));




//here we define the components, in left to right order of var newRowItem
	var newRowItem = $("<tr><td>" + snapshot.val().keyTrainName + "</td><td>" + snapshot.val().keyDestination + "</td><td>" + snapshot.val().keyFrequencyMin + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");
//here we append var newRowItem to table
	$("#tableSched").append(newRowItem);

	

	



})