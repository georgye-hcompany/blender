import fs from 'fs';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';

const img1 = PNG.sync.read(fs.readFileSync('/Users/georg.ye/.cursor/projects/Users-georg-ye-Desktop-ui/assets/image-2fc0e9e4-4f2b-4d93-92cc-72b1f24ddd59.png'));
const img2 = PNG.sync.read(fs.readFileSync('/Users/georg.ye/.cursor/projects/Users-georg-ye-Desktop-ui/assets/image-c5f08973-6854-4753-882f-daf021cfda02.png'));

const { width, height } = img1;
if (img1.width !== img2.width || img1.height !== img2.height) {
  console.log('Different sizes:', img1.width, img1.height, 'vs', img2.width, img2.height);
} else {
  const diff = new PNG({ width, height });
  const numDiffPixels = pixelmatch(img1.data, img2.data, diff.data, width, height, { threshold: 0.1 });
  console.log('Number of different pixels:', numDiffPixels);
  
  if (numDiffPixels > 0) {
    // Find where the differences are
    let minX = width, minY = height, maxX = 0, maxY = 0;
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const idx = (width * y + x) * 4;
        if (diff.data[idx] === 255) { // pixelmatch marks differences with red
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }
    console.log(`Difference bounds: X(${minX}-${maxX}), Y(${minY}-${maxY})`);
  }
}
