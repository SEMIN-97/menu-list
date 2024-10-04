import { filterMenu, generateMenuHTML } from './menu.js';
import { render } from './dom.js';
import { fetchCategories } from './data.js';

export const initCategory = async () => {
  const categories = await fetchCategories();
  const categoryHTML = generateCategoryHTML(categories);

  render('#categories', categoryHTML);
  addCategoryEventListener();
}

const generateCategoryHTML = (categories) => {
  return categories.map(category => createCategoryElement(category)).join('');
}

const createCategoryElement = ({ key, name }) => {
  return `<li><button data-category="${key}">${name}</button></li>`;
}

const addCategoryEventListener = () => {
  const categoryContainer = document.querySelector('#categories');

  categoryContainer.addEventListener('click', ({ target }) => {
    const selectedCategory = target?.dataset?.category;

    if (!selectedCategory) {
      return;
    }

    handleCategoryClick(selectedCategory);
  })
}

const handleCategoryClick = (category) => {
  const filteredMenu = filterMenu(category);
  const menuHTML = generateMenuHTML(filteredMenu);

  render('#menus', menuHTML);
}