function getPopularCategories(products) {
  return products
    .filter(product => product.sales > 5)                // фільтруємо продажі > 5
    .sort((a, b) => b.sales - a.sales)                  // сортуємо за спаданням продажів
    .map(product => product.category)                   // беремо тільки категорії
    .filter((category, index, arr) => arr.indexOf(category) === index); // унікальні категорії
}

const products = [
  { name: 'Phone', category: 'Electronics', sales: 10 },
  { name: 'Tablet', category: 'Electronics', sales: 3 },
  { name: 'Shirt', category: 'Clothing', sales: 8 },
  { name: 'Laptop', category: 'Electronics', sales: 12 },
  { name: 'Jacket', category: 'Clothing', sales: 2 },
  { name: 'Shoes', category: 'Footwear', sales: 6 },
  { name: 'Watch', category: 'Electronics', sales: 7 }
];

console.log(getPopularCategories(products)); // ['Electronics', 'Clothing', 'Footwear']

module.exports = getPopularCategories;
