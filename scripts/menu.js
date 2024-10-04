import { fetchMenus } from './data.js';
import { render } from './dom.js';

let menuData = [];

export const initMenu = async () => {
  const menus = await fetchMenus();
  menuData = menus;

  const menuHTML = generateMenuHTML(menus);
  render('#menus', menuHTML);
}

export const generateMenuHTML = (menus) => {
  return menus.map(menu => createMenuElement(menu)).join('');
}

const createMenuElement = ({ id, name, price }) => {
  return (`
    <li>
      <img src="/assets/images/menu/${id}.png" alt="">
      <div class="info">
        <p class="name">${name}</p>
        <p class="price">${price}</p>
      </div>
    </li>
  `)
}

export const filterMenu = (category) => {
  if (category === 'all') {
    return menuData;
  }

  return menuData.filter(menu => menu.category === category);
}