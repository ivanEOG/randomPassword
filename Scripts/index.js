const characters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOne = document.getElementById("passwordOne")
let passTwo = document.getElementById("passwordTwo")
let countOne = ""
let countTwo = ""
let isClicked = false
let copyFirst=""
let copySecond=""

function generate(){
    if(isClicked===false){
        for (let i = 0; i < 15; i++){
            countOne += characters[Math.floor(Math.random()*characters.length)] 
            countTwo += characters[Math.floor(Math.random()*characters.length)]
        }
        passOne.textContent = countOne
        passTwo.textContent = countTwo
    }
    isClicked = true
    copyFirst = countOne
    copySecond = countTwo
}

function copyOne(){
   
    navigator.clipboard.writeText(copyFirst)
    alert("Copied the password: " + copyFirst)
 }
 
 function copyTwo(){
    
     navigator.clipboard.writeText(copySecond)
     alert("Copied the password: " + copySecond)
  }

