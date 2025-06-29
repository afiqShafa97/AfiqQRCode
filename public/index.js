alert("working");



document.getElementById("kirimBtn").addEventListener("click", async () => {
  const tautan = document.getElementById("tautanQR").value;
  
  try {
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tautan }),
    });

    const result = await response.json();
    console.log("Server response:", result);
  } catch (error) {
    console.error("Error:", error);
  }
});


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
