// Load Category Buttons fetching from API and Output in Navbar
const loadCategoryButtons = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/categories`)
    const data = await response.json()
    const categoryContainer = document.getElementById('category-container')

    data.categories.forEach(item => {
        const categoryBtn = document.createElement('div')
        categoryBtn.innerHTML = `
      <button class="btn rounded-full px-6">${item.category}</button>
      `
        categoryContainer.append(categoryBtn)
    });

}
loadCategoryButtons()

// Load all Videos from Api and show dynamically of card
const loadVideos = async () => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phero-tube/videos`)
    const data = await response.json()

    const videosContainer = document.getElementById('videos-container')
    data.videos.forEach(video => {
        console.log(video);

        const videoCard = document.createElement('div')
        videoCard.classList.add = "card"
        videoCard.innerHTML = `
          <figure>
    <img
      class="h-[200px] w-full object-cover"
      src=${video.thumbnail}
      alt="Shoes" />
  </figure>
  <div class="py-2 md:py-4 flex gap-2 md:gap-3">
    
    <div>
         <img class="h-10 w-10 rounded-full object-cover" src=${video.authors[0].profile_picture} alt="Shoes" />
    </div>
    <div>
      <h2 class="card-title font-bold">${video.title}</h2>
      <div class="flex items-center gap-2">
       <p class="text-gray-500">${video.authors[0].profile_name}</p>
       ${video.authors[0].verified === false ? `` : `<img class="h-5 w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="Shoes" />`
            }
       </div>
       <p class="text-gray-500 text-xs mt-2">${video.others.views} views</p>
    </div>      
  </div>
        `
        videosContainer.append(videoCard)
    })

}
loadVideos()


