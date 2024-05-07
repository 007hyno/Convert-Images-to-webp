import fs from 'fs';
import path from 'path';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

const inputDir = './input/Reduce';
const outputDir = './output/Reduced';
const supportedFormats = ['.png', '.jpg', '.jpeg', '.webp'];

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
    const ext = path.extname(file).toLowerCase();

    const plugins = [
      imageminWebp({ quality: 80 }),
      ext === '.jpg' || ext === '.jpeg' ? imageminMozjpeg() : null,
      ext === '.png' ? imageminPngquant({ quality: [0.6, 0.8] }) : null,
    ].filter(Boolean); // Remove null values from the plugins array

    imagemin([inputPath], {
      destination: outputDir,
      plugins: plugins
    })
      .then(() => {
        console.log(`Processed ${file}`);
      })
      .catch(err => {
        console.error(`Error processing ${file}:`, err);
      });
  });
});