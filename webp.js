// const imagemin = require('imagemin');
// const imageminWebp = require('imagemin-webp');

// imagemin(['images/*.{jpg,png}'], {
//   destination: __dirname + '/images/converted/',
//   plugins: [
//     imageminWebp({
//       quality: 75,
//       resize: {
//         width: 1000,
//         height: 0
//       }
//     })
//   ]
// }).then(() => {
//   console.log('Images optimized');
// });
import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';

const inputDir = './input/input webp';
const outputDir = './output/output webp';
const supportedFormats = ['.png', '.jpg', '.jpeg', 'webp']; // Add more formats as needed

// Create the output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Read all files in the input directory
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter out non-supported files
  const supportedFiles = files.filter(file => {
    const ext = path.extname(file).toLowerCase();
    return supportedFormats.includes(ext);
  });

  // Process each supported file
  supportedFiles.forEach(file => {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, `${path.basename(file, path.extname(file))}.webp`);

    imagemin([inputPath], {
      destination: outputDir,
      plugins: [
        imageminWebp({ quality: 80 })
      ]
    })
      .then(() => {
        console.log(`Converted ${file} to WebP format`);
      })
      .catch(err => {
        console.error(`Error converting ${file}:`, err);
      });
  });
});