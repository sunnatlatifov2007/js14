// functions
let age = prompt("Are you 18?")
function checkage(age) {
    if (age >= 18) {
        alert("You can enter!")
    }else{
        alert("You cannot enter!")
    }
}

if(!isNaN(age) && age!== ""){
    checkage(Number(age));
}else{
    alert("Stupid!")
}

function calc(a, b, commands) {
    switch(commands){
        case "+":
           console.log(a + b);
        break;
        case "-":
            console.log(a - b);
            break;
        case "*":
            console.log(a * b);
            break;
        case "%":
            console.log(a % b);
            break;
         case "**":   
            console.log(a ** b);
            break;
         case "/":
            console.log(a / b);
            break;
    }
}


let a = Number(prompt("Enter a number (a):"))

let b = Number(prompt("Enter another number (b):"))
let commands = prompt("choose a command: +, *, **, %, /, -");

calc(a, b, commands)


function searchLongestName(name1, name2, name3) {
    if (name1.length >= name2.length && name1.length >= name3.length) {
        return name1;
    } else if (name2.length >= name1.length && name2.length >= name3.length) {
        return name2;
    } else {
        return name3;
    }
}


let longestName = searchLongestName("Alex", "George", "Michael");
console.log("Самое длинное имя:", longestName);
