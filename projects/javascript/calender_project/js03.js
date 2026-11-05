/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Matthew Schuster
     Date:   11/4/2026

     Filename: js03.js
 */

let weekDays = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"];
window.addEventListener("load", addWeekDays);
window.addEventListener("load", showGames);

function addWeekDays(){
    let headingCells = document.getElementsByTagName("th");
    let i = 0;
    while (i < 7){
        headingCells[i].innerHTML = weekDays[i];

        i++;
    }
}

function showGames(){
    for(let i = 0; i<gameDates.length;i++){
        let gameInfo;

        switch(gameResults[i]){
            case "W": gameInfo = "<p class='win'>"; break;
            case "L": gameInfo = "<p class='lose'>"; break;
            case "S": gameInfo = "<p class='suspended'>"; break;
            case "P": gameInfo = "<p class='postponed'>"; break;
        }

        if(gameLocations[i] == "h")
            gameInfo += "vs. ";
        else
            gameInfo += "@ ";

        gameInfo += gameOpponents[i] + "<br>";
        gameInfo += gameResults[i] + ": (";
        gameInfo += runsScored[i] + " - " + runsAllowed[i] + ")";

        if(gameInnings[i] < 5)
            gameInfo += " [" + gameInnings[i] + "]***";
        else if(gameInnings[i] < 9)
            gameInfo += " [" + gameInnings[i] + "]*";
        else if(gameInnings[i] > 9)
            gameInfo += " [" + gameInnings[i] + "]</p>";
        let tableCell = document.getElementById(gameDates[i]);
        tableCell.insertAdjacentHTML("beforeEnd", gameInfo)
    }
}