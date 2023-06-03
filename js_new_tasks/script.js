//TASK 1
function CheckAge() {
  let age = document.getElementById("inp").value;
  if (age == "") {
    alert("Yaşınızı düzgün daxil edin!");
  } else if (age > 20) {
    alert("Yaşınız 20-dən böyükdür.");
  } else {
    alert("Yaşınız 20-dən kiçikdir.");
  }
}

//TASK 2
function CheckNumber() {
  let num = document.getElementById("inp-num").value;
  if (num == 0) {
    alert("0 ne tek ne de cutdur");
  } else if (num % 2 == 0) {
    alert("Daxil etdiyiniz reqem cutdur");
  } else {
    alert("Daxil etdiyiniz reqem tekdir");
  }
}

//TASK 3
//for-Promptdan alinan reqeme qeder olan tek reqemleri yazdir

// function forFunction() {
//   let number = parseInt(prompt("Eded daxil edin: "));

//   for (let i = 0; i < number; i++) {
//     if (i % 2 != 0) {
//       console.log(i);
//     }
//   }
// }

// forFunction();



//while-Promptdan alinan cavabin duz sehvliyini yoxlasin

// let result = parseInt(prompt("10*5 : "));
// let trueRes = 50;

// while (result != trueRes) {
//   console.log("Duzgun daxil edin:");
//   result = parseInt(prompt("10*5 : "));
// }
// console.log(result);



//do-while

// let name=prompt("Adinizi daxil edin: ")
// let truRes="Leman";

// do {
//     console.log("Leman :)");
// } while (name == truRes);