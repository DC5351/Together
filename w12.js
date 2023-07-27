/* this variable will track the current lap
as we add another lap, we will increase the value of the counter by 1 */
var lapCounter = 0;
//set up an empty array that will hold the lap times
let laps = [];

//Create a function to record a lap
function recordLap(){
    lapCounter++; //same as lapCounter = lapCounter + 1

    // add the current time to the laps
    laps.push(new Date());

    //print out a receipt to the console
    console.log("Lap " + lapCounter + " recorded: " + laps[lapCounter-1])

    //display a message to the user that the lap was successfully recorded
    document.getElementById("divMsg").innerText = "Lap " +lapCounter + " recorded.";
}

//Create a function to display the laps to the user
function displayLapTimes(){
    //create a pointer variable to the div
    var divLaps = document.getElementById("divLaps");

    //create an unordered list to hold the lap times
    var list = document.createElement("ul");

    //add the unordered list to the html page
    divLaps.appendChild(list);

    //loop through the array and show the lap times
    for (var i=0; i < laps.length; i++){
        //create a list item that will be added to the unordered list
        var listItem = document.createElement("li");

        //add the lap info to the list item text
        listItem.textContent = "Lap " + i + ": " + laps[i];

        //add the listitem to the unordered list
        list.appendChild(listItem);
    }
}

