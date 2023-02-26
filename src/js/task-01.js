const allCategoriesEl = document.querySelectorAll(".item");

console.log(`Number of categories: ${allCategoriesEl.length}`);

allCategoriesEl.forEach(element => {
console.log(`Category: ${element.children[0].textContent}
Elements: ${element.children[1].children.length}`)
})