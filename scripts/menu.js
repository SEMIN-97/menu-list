export const createMenuElement = (menus) => {
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