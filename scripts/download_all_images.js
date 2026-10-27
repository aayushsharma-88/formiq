const fs = require('fs');
const path = require('path');

const mapping = JSON.parse(fs.readFileSync('final_complete_mapping.json', 'utf8'));
const destDir = path.join(__dirname, '..', 'public', 'images', 'exercises');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const toDownload = [];
let preservedCount = 0;

for (const [id, item] of Object.entries(mapping)) {
  if (item.type === 'LOCAL_PRESERVED') {
    const filePath = path.join(destDir, `${id}.png`);
    if (fs.existsSync(filePath)) {
      preservedCount++;
    } else {
      console.error(`WARNING: Preserved file missing: ${filePath}`);
    }
  } else if (item.type === 'DOWNLOADED_WEBP') {
    const filePath = path.join(destDir, `${id}.webp`);
    if (!fs.existsSync(filePath) || fs.statSync(filePath).size < 1000) {
      toDownload.push({ id, ...item, targetPath: filePath });
    }
  }
}

console.log(`Preserved local existing PNGs verified: ${preservedCount}`);
console.log(`Images already present on disk: ${Object.keys(mapping).length - preservedCount - toDownload.length}`);
console.log(`Images to download: ${toDownload.length}`);

async function downloadItem(item) {
  try {
    const res = await fetch(item.downloadUrl);
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }
    const buf = await res.arrayBuffer();
    fs.writeFileSync(item.targetPath, Buffer.from(buf));
    return { id: item.id, success: true, size: buf.byteLength };
  } catch (err) {
    console.error(`Failed ${item.id} (${item.downloadUrl}):`, err.message);
    return { id: item.id, success: false, error: err.message };
  }
}

async function runBatch() {
  const batchSize = 10;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < toDownload.length; i += batchSize) {
    const batch = toDownload.slice(i, i + batchSize);
    const results = await Promise.all(batch.map(downloadItem));
    results.forEach(r => {
      if (r.success) successCount++;
      else failCount++;
    });
    process.stdout.write(`Downloaded ${Math.min(i + batchSize, toDownload.length)} / ${toDownload.length}...\r`);
  }

  console.log(`\n\nDownload complete!`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${failCount}`);
}

runBatch();
