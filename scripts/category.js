export const createCategoryElement = (categories) => {
  const elements = categories.map(category => (
    `<li><button data-key="${category.key}">${category.name}</button></li>`
  ));

  return elements.join('');
}