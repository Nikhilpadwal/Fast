const sharp = require("sharp");
const fs = require("fs");

function convertToWebp(inputPath, outputPath) {
  sharp(inputPath)
    .webp({ quality: 80 }) // Adjust quality if needed
    .toFile(outputPath)
    .then(() => {
      console.log(`Image successfully converted to: ${outputPath}`);
    })
    .catch((err) => {
      console.error(`An error occurred while processing ${inputPath}:`, err);
    });
}

// Example usage for multiple images
const inputFiles = [
  "./bn1.png",
  "./bn2.png",
 
];

const outputDirectory = "29-30 aug"; // Directory to save converted WebP images

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDirectory)) {
  fs.mkdirSync(outputDirectory);
}

// Loop through each input file and convert it
inputFiles.forEach((inputFile) => {
  if (fs.existsSync(inputFile)) {
    const fileName = inputFile.split("/").pop().replace(".png", ".webp"); // Extract original file name and change extension to .webp
    const outputFilePath = `${outputDirectory}/${fileName}`; // Use the original file name for the output
    convertToWebp(inputFile, outputFilePath);
  } else {
    console.error(`Input file not found: ${inputFile}`);
  }
});
