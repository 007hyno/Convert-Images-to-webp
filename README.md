# Image Converter and Reducer

This project contains two Node.js scripts:

1. `webp.js`: Converts images (PNG, JPG, JPEG) to WebP format.
2. `reducer.js`: Reduces the size of WebP images without losing quality.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone this repository or download the source code.
2. Open a terminal or command prompt and navigate to the project directory.
3. Install the required dependencies by running:

### Converting Images to WebP Format

1. Create a folder named `images` in the project directory.
2. Place your PNG, JPG, or JPEG images in the `images` folder.
3. Open a terminal or command prompt and navigate to the project directory.
4. Run the following command:
This script will convert all supported image formats (PNG, JPG, JPEG) in the `images` folder to WebP format and save the output files in an `output` folder.

### Reducing the Size of WebP Images

1. After running the `webp.js` script, you should have WebP files in the `output` folder.
2. Open a terminal or command prompt and navigate to the project directory.
3. Run the following command:
This script will read the WebP files from the `output` folder, reduce their size without losing quality, and save the reduced-size images in a `reduced` folder.
