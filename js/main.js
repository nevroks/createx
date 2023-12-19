let offset1 = 0
const slider1line1 = document.querySelector('.slider1-line')

document.querySelector('.slider1__next-btn').addEventListener('click', () => {
    offset1 = offset1 + 100
    if (offset1 > 350) {
        offset1 = 0
    }
    slider1line1.style.left = -offset1 + "vw"
})
document.querySelector('.slider1__prev-btn').addEventListener('click', () => {
    offset1 = offset1 - 100
    if (offset1 < 50) {
        offset1 = 300
    }
    slider1line1.style.left = -offset1 + "vw"
})
let offset2 = 0
const slider1line2 = document.querySelector('.slider2-line-line')
const slider2Item = document.querySelectorAll(".slider2-line__item")
slider2Item.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        el.querySelector('.slider2-line__item-button').style.height = 68 + 'px'
        el.querySelector(".slider2-line__item-button-button").classList.add('active')
    })
    el.addEventListener('mouseleave', () => {
        el.querySelector('.slider2-line__item-button').style.height = 0 + 'px'
        el.querySelector(".slider2-line__item-button-button").classList.remove('active')
    })
})
document.querySelector('.slider2__next-btn').addEventListener('click', () => {
    offset2 = offset2 + 420
    if (offset2 > 2600) {
        offset2 = 0
    }
    slider1line2.style.left = -offset2 + "px"
})
document.querySelector('.slider2__prev-btn').addEventListener('click', () => {
    offset2 = offset2 - 420
    if (offset2 < 0) {
        offset2 = 2490
    }
    slider1line2.style.left = -offset2 + "px"
})
let offset3 = 0
const slider1line3 = document.querySelector('.slider3-line')
document.querySelector('.slider3-btns-next').addEventListener('click', () => {
    offset3 = offset3 + 610
    if (offset3 > 1810) {
        offset3 = 0
    }
    slider1line3.style.left = -offset3 + "px"
})
document.querySelector('.slider3-btns-prev').addEventListener('click', () => {
    offset3 = offset3 - 610
    if (offset3 <= 0) {
        offset3 = 1220
    }
    slider1line3.style.left = -offset3 + "px"
})

document.querySelectorAll('.recentNews__link').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        el.querySelector(".recentNews__news-text__title").style.color = '#FF5A30'
    })
    el.addEventListener('mouseleave', () => {
        el.querySelector(".recentNews__news-text__title").style.color = '#1E212C'
    })
})