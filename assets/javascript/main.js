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

  var database = firebase.database();

//click handler, Grabs user input via Submit button
$("button").on("click", function(){
// button works?
	console.log("hello");

    // here we define variables needed for 'Add Train' table
	var trainName = $("#train-name").val().trim();
	var destination = $("#train-destination").val().trim();
	var firstTrainTime = $("#first-train-time").val().trim();// perhaps I am missing moment($ at beginning
	var frequencyMin = $("#frequency-name").val().trim();

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
	// Alert
	alert("Train successfully added");
});



database.ref().on("child_added", function(snapshot) {  // this function fires anytime something is added to firebase

	var keyTrainName = snapshot.val().keyTrainName;
	var keyDestination = snapshot.val().keyDestination;
	var keyFirstTrainTime = snapshot.val().keyFirstTrainTime;
	var keyFrequencyMin = snapshot.val().keyFrequencyMin;

	// console.log(keyTrainName)

//defines now as the actual time using 	
var now = moment();	
// next arrival = THIS LINE NEEDS HELP! DONT KNOW HOW TO FORMAT OR WHAT EQUATION TO USE, maybe first train time +  for loop iterating frequency and breaking at first time AFTER moment (ie var now) 
	

	// var nextArrival;
	// for (nextArrival = firstTrainTime; nextArrival + frequencyMin; nextArrival++) { //option 2
	// 	text += [nextArrival];
	// }

	// var nextArrival = moment().diff(snapshot.val().firstTrainTime , "what text goes here?? maybe nothing"); // option 3 what goes is quote? i dont know

   // First Time (pushed back 1 year to make sure it comes before current time)
   var firstTimeConverted = moment(keyFirstTrainTime, "HH:mm").subtract(1, "years");
   console.log(firstTimeConverted);

   console.log(keyFirstTrainTime);


// var nextArrival = "12:34"; //dummy. get rid of later


	//Code this app to calculate when the next train will arrive; this should be relative to the current time.
// here we code the following : minutes away = next arrival - now (or what is the difference between var now and var nextArrival) I THINK THIS LINE IS CORRECT
	var minutesAway = moment().diff(moment(firstTimeConverted), "minutes");

console.log(minutesAway);


//here we define the components, in left to right order of var newRowItem
	var newRowItem = $("<tr><td>" + snapshot.val().keyTrainName + "</td><td>" + snapshot.val().keyDestination + "</td><td>" + snapshot.val().keyFrequencyMin + "</td><td>" + (now + minutesAway)+ "</td><td>" + minutesAway + "</td></tr>");
//here we append var newRowItem to table
	$("#tableSched").append(newRowItem);

	

	



});