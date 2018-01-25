// Initialize Firebase
var config = {
    apiKey: "AIzaSyBw_1wA74K0-82AYpZN9nbVHbMbfJbUNTs",
    authDomain: "trainschedule-a7c6d.firebaseapp.com",
    databaseURL: "https://trainschedule-a7c6d.firebaseio.com",
    projectId: "trainschedule-a7c6d",
    storageBucket: "trainschedule-a7c6d.appspot.com",
    messagingSenderId: "622698768658"

};

firebase.initializeApp(config);
var trainData = firebase.database();

// On-Click, add a new Train Schedule
$("#add-train-btn").on("click", function() {
  var trainName = $("#train-name-input").val().trim();
  var destination = $("#destination-input").val().trim();
  var firstTrain = $("#first-train-input").val().trim();
  var frequency = $("#frequency-input").val().trim();

  var newTrain = {
    name: trainName,
    destination: destination,
    firstTrain: firstTrain,
    frequency: frequency
  };

  trainData.ref().push(newTrain);
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");
});

// Print Schedule
trainData.ref().on("child_added", function(childSnapshot, prevChildKey) {
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainFrequency = childSnapshot.val().frequency;
  var trainFirstTrain = childSnapshot.val().firstTrain;

  console.log(trainName);

// Clear form
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#first-train-input").val("");
  $("#frequency-input").val("");

            
$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" + trainFrequency + "</td></td>");
      });
