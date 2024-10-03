import { fetchCategories, fetchMenus } from './data.js';
import { render } from './dom.js';
import { createCategoryElement } from './category.js';
import { createMenuElement } from './menu.js';

document.addEventListener('DOMContentLoaded', async () => {
  const categories = await fetchCategories();
  const categoryElement = createCategoryElement(categories);
  render('#categories', categoryElement);

  const menus = await fetchMenus();
  const menuElement = createMenuElement(menus);
  render('#menus', menuElement);
});