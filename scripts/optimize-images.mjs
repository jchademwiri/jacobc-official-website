import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const directories = [
  'public/images/blog',
  'public/images/portfolio',
  'public/images/profile',
];

async function optimizeImages() {
  let totalSaved = 0;

  for (const dir of directories) {
    const fullDir = path.resolve(dir);
    if (!fs.existsSync(fullDir)) continue;

    const files = fs.readdirSync(fullDir).filter((f) => f.endsWith('.jpg'));

    for (const file of files) {
      const inputPath = path.join(fullDir, file);
      const outputPath = path.join(fullDir, file.replace(/\.jpg$/, '.webp'));

      const inputStat = fs.statSync(inputPath);
      await sharp(inputPath)
        .webp({ quality: 82, effort: 6 })
        .toFile(outputPath);

      const outputStat = fs.statSync(outputPath);
      const saved = inputStat.size - outputStat.size;
      totalSaved += saved;

      console.log(
        `${file}: ${(inputStat.size / 1024).toFixed(1)} KB -> ${(outputStat.size / 1024).toFixed(1)} KB (saved ${(saved / 1024).toFixed(1)} KB)`
      );
    }
  }

  console.log(`\nTotal bandwidth saved across all images: ${(totalSaved / (1024 * 1024)).toFixed(2)} MB`);
}

optimizeImages();
