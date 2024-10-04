let menuData = [];

export const createMenuElement = (menus) => {
  if (!menuData.length) {
    menuData = menus;
  }

  const elements = menus.map(({ id, name, price }) => (
    `<li>
      <img src="/assets/images/menu/${id}.png" alt="">
      <div class="info">
        <p class="name">${name}</p>
        <p class="price">${price}</p>
      </div>
    </li>`
  ));

  return elements.join('');
}

export const filterMenu = (category) => {
  if (category === 'all') {
   return menuData;
  }

  return menuData.filter(menu => menu.category === category);
}