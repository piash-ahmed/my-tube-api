const loadCategoryButtons = async() => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
    const data = await response.json()
    console.log(data.categories);
    const categoryContainer = document.getElementById('category-container')

    data.categories.forEach(item => {
        console.log(item.category);
      const categoryBtn = document.createElement('div')
      categoryBtn.innerHTML = `
      <button class="btn rounded-full px-6">${item.category}</button>
      `
        categoryContainer.append(categoryBtn)
    });
    
}
loadCategoryButtons()