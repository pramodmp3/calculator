let input = document.getElementById("result"); // select the input once

function add(a){
    input.value += a; // append clicked button value
}

function clear1(){
    input.value = ""; // clear input
}

function delete1(){
    input.value = input.value.slice(0, -1); // delete last character
}

function final1(){
    try {
        let expression = input.value.replace(/\^/g, "**"); // support exponent
        input.value = eval(expression); // calculate result
    } catch {
        input.value = "Error"; // handle invalid input
    }
}

// Optional: just to check equal button
let equal = document.querySelector(".equal");
console.log(equal);

















// function add(a){
//     input.value=input.value+a;
// }
// add()

// function clear1(){
//     input.value="";
// }
// clear1()

// function delete1(){
//     input.value=input.value.slice(0,-1)
// }
// delete1()

// function final1(){
// input.value=eval(input.value)
// }
// final1()

// let equal= document.querySelector(".equal")
// console.log(equal);