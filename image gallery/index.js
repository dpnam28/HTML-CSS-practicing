const scrollGallery = document.querySelector('.gallery')
const backBtn = document.getElementById('backBtn')
const nextBtn = document.getElementById('nextBtn')

scrollGallery.onmousewheel = (e) =>{
    e.preventDefault()
    console.log([e])
    scrollGallery.scrollLeft += e.deltaY
}

backBtn.onclick = (e) => {
    scrollGallery.style.scrollBehavior = 'smooth'
    scrollGallery.scrollLeft -= 900
}
nextBtn.onclick = (e) => {
    scrollGallery.style.scrollBehavior = 'smooth'
    scrollGallery.scrollLeft += 900
}