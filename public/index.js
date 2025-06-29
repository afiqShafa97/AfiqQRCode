//alert("working");

document.getElementById("kirimBtn").addEventListener("click", async () => {
  const tautan = document.getElementById("tautanQR").value;
  const namaFile = document.getElementById("namaFileQR").value + ".png" || "afiqQRCode.png";

  if (!tautan) {
    alert("Silakan isi kotak teks tautan sebelum mengirim.");
    return;
  }

  try {
    const response = await fetch("/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tautan }),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = namaFile;
    document.body.appendChild(a);
    a.click();
    a.remove();
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
