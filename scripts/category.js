import { createMenuElement, filterMenu } from './menu.js';
import { render } from './dom.js';

export const createCategoryElement = (categories) => {
  const elements = categories.map(category => (
    `<li><button data-category="${category.key}">${category.name}</button></li>`
  ));

  return elements.join('');
}

export const addCategoryEventListener = () => {
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
  const element = createMenuElement(filteredMenu);

  render('#menus', element);
}