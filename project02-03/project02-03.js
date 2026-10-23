/*    JavaScript 7th Edition
      Chapter 2
      Project 02-03

      Application to return the shape of a clicked object
      Author: Matthew Schuster
      Date:   10/19/2026

      Filename: project02-03.js
 */
document.getElementById("square").onmouseover = overSquare;
document.getElementById("square").onmouseout = out;
document.getElementById("triangle").onmouseover = overTriangle;
document.getElementById("triangle").onmouseout = out;
document.getElementById("circle").onmouseover = overCircle;
document.getElementById("circle").onmouseout = out;

function overSquare(){
      document.getElementById("feedback").innerHTML = "You're hovering over the Square"
}

function overTriangle(){
      document.getElementById("feedback").innerHTML = "You're hovering over the Triangle"
}

function overCircle(){
      document.getElementById("feedback").innerHTML = "You're hovering over the Circle"
}

function out(){
      document.getElementById("feedback").innerHTML = ""
}