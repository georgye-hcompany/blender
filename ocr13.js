import { createWorker } from 'tesseract.js';
(async () => {
  const worker = await createWorker('eng');
  const ret = await worker.recognize('/Users/georg.ye/.cursor/projects/Users-georg-ye-Desktop-ui/assets/image-95a751d3-f3c3-442b-b167-4d75696b3923.png', { rectangle: { top: 40, left: 240, width: 260, height: 200 } });
  console.log(ret.data.text);
  await worker.terminate();
})();
