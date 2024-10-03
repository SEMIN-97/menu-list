import { fetchCategories } from './data.js';
import { render } from './dom.js';
import { createCategoryElement } from './category.js';

document.addEventListener('DOMContentLoaded', async () => {
  const categories = await fetchCategories();
  const categoryElement = createCategoryElement(categories);

  render('#categories', categoryElement);
});