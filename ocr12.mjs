import { createWorker } from 'tesseract.js';
(async () => {
  const worker = await createWorker('eng');
  const ret = await worker.recognize('/Users/georg.ye/.cursor/projects/Users-georg-ye-Desktop-ui/assets/image-731cd070-fd18-49bc-939d-2fc9a38c3298.png', { rectangle: { top: 50, left: 250, width: 250, height: 200 } });
  console.log(ret.data.text);
  await worker.terminate();
})();
