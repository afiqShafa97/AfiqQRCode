alert("working");
// import { imageSync } from "qr-image";
// import { writeFileSync } from "fs";
// import { writeFile } from "fs";

// function generateQRandText(textInput) {
//   writeFile("generatedText.txt", textInput, (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
//   });
//   const qr_now = imageSync(textInput, { type: "png" });
//   writeFileSync("generatedQR.png", qr_now);
// }

// document.getElementById("kirimBtn").addEventListener("click", () => {
//   const nilaiTautan = document.getElementById("tautanQR").value;
//   alert("Input value:", nilaiTautan);
// });

// import inquirer from "inquirer";

// const questions = [
//   {
//     type: "input",
//     name: "url",
//     message: "Type an URL to convert it into a qr-code and a text-file",
//     default() {
//       return "www.google.com";
//     },
//   },
// ];

// inquirer.prompt(questions).then((answers) => {
//   //console.log("logged: " + answers.url);
//   let urlText = answers.url;
//   console.log("Your link is: " + urlText);
//   console.log("We will generate the qr-code and text in a moment");
//   generateQRandText(urlText);
// });
