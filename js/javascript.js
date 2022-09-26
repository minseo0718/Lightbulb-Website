// var someWords = document.getElementById("intro").innerHTML;
// console.log("hello");
// alert('hello');

function changeColor() {
    var x = document.getElementById("bestthing");
    x.style.background = "#163F74";
    x.style.color = "white";
}

var logo = document.getElementById("logo");

function makeBigger() {
    logo.style.height = "200px";
}


function goBack() {
    logo.style.height = "100px";

}


function emailValidation() {
    const email_first = document.getElementsById("email1");
    if(email_first.indexOf("@") == -1 ) {
        console.log("Enter a valid email!");
        alert('Enter a vaild email!');
        return false;
    }
}

// function something() {
//     alert('internal script');
// }

// function variablePractice() {

//     let y; // this variable will change
//     const location = "Sunnyvale"; // this variable will not be changed

//     console.log(y);
//     console.log(location);

//     y = 40;
//     console.log(y);

//     y = "a string value";
//     console.log(y);

//     //location = "state college"; // will not work

//     const arr1 = ["atari", "sega", "sony"];
//     console.log(arr1[2]);

//     const arr2 = Array("1", "2", "3");
//     console.log(arr2[0]);

//     const twoDimmArr = Array(arr1, arr2);
//     console.log(twoDimmArr[0][2]);

//     // associate arry / map / key - value
//     // javascript object notation
//     // json
//     const kvPairs = {
//         "name" : "Marty",
//         "occupation" : "Slacker",
//         "age" : 17
//     };

//     console.log(kvPairs["name"]);
//     console.log(kvParis.name);

//     const first = 10;
//     const second = "10";

//     if (first == second) { // == -> ignoring the type
//         console.log("1");
//     } else {
//         console.log("2");
//     }

//     if (first === second) { // === -> not ignoring the type
//         console.log("A");
//     } else {
//         console.log("B");
//     }
// }

// const x = 1;
// function varScope() {
//     const x = 2;
//     console.log(x); // print 2
//     if (x === 2) {
//         const x = 3;
//         console.log(x); // print 3
//     } 
//     console.log(x); // print 2
// }