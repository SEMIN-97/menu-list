import { filterMenu, generateMenuHTML } from './menu.js';
import { addClass, removeClass, render } from './dom.js';
import { fetchCategories } from './data.js';

export const initCategory = async () => {
  const categories = await fetchCategories();
  const categoryHTML = generateCategoryHTML(categories);

  render('#categories', categoryHTML);
  setFirstCategoryActive();
  addCategoryEventListener();
}

const generateCategoryHTML = (categories) => {
  return categories.map(category => createCategoryElement(category)).join('');
}

const createCategoryElement = ({ key, name }) => {
  return `<li><button data-category="${key}"><span>${name}</span></button></li>`;
}

const addCategoryEventListener = () => {
  const categoryContainer = document.querySelector('#categories');

  categoryContainer.addEventListener('click', ({ target }) => {
    const selectedCategory = target.closest('button')?.dataset?.category;

    if (!selectedCategory) {
      return;
    }

    handleCategoryClick(selectedCategory);
    setActiveCategory(target.closest('li'));
  });
}

const handleCategoryClick = (category) => {
  const filteredMenu = filterMenu(category);
  const menuHTML = generateMenuHTML(filteredMenu);

  render('#menus', menuHTML);
}

const setFirstCategoryActive = () => {
  const firstCategoryElement = document.querySelectorAll('#categories li')[0];
  setActiveCategory(firstCategoryElement);
}

const setActiveCategory = (targetElement) => {
  const container = document.querySelector('#categories');
  const currentActiveElement = container.querySelector('li.active');

  if (currentActiveElement) {
    removeClass(currentActiveElement, 'active');
  }

  addClass(targetElement, 'active');
}