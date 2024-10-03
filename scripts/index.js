import { fetchCategories } from './data.js';
import { render } from './dom.js';

document.addEventListener('DOMContentLoaded', async () => {
  const categories = await fetchCategories();
  const elements = categories.map(category => (
    `<li><button data-key="${category.key}">${category.name}</button></li>`
  ));

  render('#categories', elements.join(''));
});