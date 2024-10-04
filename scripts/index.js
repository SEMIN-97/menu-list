import { fetchCategories } from './data.js';
import { render } from './dom.js';
import { addCategoryEventListener, createCategoryElement } from './category.js';
import { initMenu } from './menu.js';

document.addEventListener('DOMContentLoaded', async () => {
  const categories = await fetchCategories();
  const categoryElement = createCategoryElement(categories);
  render('#categories', categoryElement);
  addCategoryEventListener();

  await initMenu();
});