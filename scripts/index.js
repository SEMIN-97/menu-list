import { initCategory } from './category.js';
import { initMenu } from './menu.js';

document.addEventListener('DOMContentLoaded', async () => {
  await initCategory();
  await initMenu();
});