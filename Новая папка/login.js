'use strict' 

var logins = ["vasya", "guliay"], 
passes = [12345, 56782], 
tmpInd; 

var inputLog = prompt("Hey, give me your login:)"), 
inputPass = +prompt("Hey, enter my pass"); 

document.querySelector(".enter-respond").innerHTML = 
((tmpInd = logins.indexOf(inputLog)) !== -1 && inputPass === passes[tmpInd] ? 
"Eaaah, you did it :)" : "Nooooo, smth goes wrong :<");