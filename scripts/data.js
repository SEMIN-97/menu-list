export const fetchCategories = async () => {
  try {
    const res = await fetch('/assets/data/category.json');
    return res.json();
  } catch (e) {
    console.error('카테고리 정보를 불러올 수 없습니다');
  }
}