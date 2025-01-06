// Import required packages
import inquirer from "inquirer";  // For interactive command line prompts
import qr from "qr-image";        // For generating QR codes
import fs from "fs";              // For file system operations


// Validates if the provided string is a valid URL
function validateURL(url) {
  try {
    const constructedURL = new URL(url);
    return true;
  } catch (error) {
    console.info("Input valid URL");
  }
}

// Sanitizes URL by replacing non-alphanumeric characters with underscores
function sanitizeURL(url) {
  return url.URL.replace(/[^a-zA-Z0-9]/g, "_");
}

// Handles file writing operations - creates text files and QR code image
function fileWriter(url) {
  const validatedUrl = sanitizeURL(url);

  // Append URL to main URL list file
  fs.appendFile("./URL.txt", validatedUrl + "\n", (error) => {
    if (error) throw error;
    else {
      console.info("Main file updated !");
    }
  });

  // Create individual text file for this URL
  fs.writeFile(`${validatedUrl}.txt`, validatedUrl + "\n", (error) => {
    if (error) throw error;
    else {
      console.info(`${validatedUrl}.txt file created successfully`);
    }
  });

  // Generate QR code image
  let qr_png = qr.image(url.URL, { type: "png" });

  // Save QR code as PNG file
  qr_png.pipe(fs.createWriteStream(`${validatedUrl}.png`));
}

// Prompt user for URL input and process it
inquirer
  .prompt([
    {
      name: "URL",
      message: "Input your URL = ",
      // Validate user input
      validate(answer) {
        if (!validateURL(answer)) {
          console.info("Input valid URL");
        }
        return true;
      },
    },
  ])
  .then((answer) => {
    fileWriter(answer);  // Process the URL once received
  });
