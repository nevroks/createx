document.querySelectorAll('.thatsHowWeDoIt-list__item').forEach((el) => {
    el.addEventListener('mouseenter', () => {
        el.querySelector('.thatsHowWeDoIt-list__item-header__title-img').style.opacity = '1'
        el.querySelector('.thatsHowWeDoIt-list__item-header__title').style.color = '#FF5A30'
    })
    el.addEventListener('mouseleave', () => {
        el.querySelector('.thatsHowWeDoIt-list__item-header__title-img').style.opacity = '0'
        el.querySelector('.thatsHowWeDoIt-list__item-header__title').style.color = '#D7DADD'
    })
})
let offset4 = 0
const slider4line4 = document.querySelector('.slider4-line-line')
const slider4Item = document.querySelectorAll(".slider4-line__item")
slider4Item.forEach((el) => {
    el.addEventListener('mouseenter', () => {
        el.querySelector('.slider4-line__item-button').style.height = 68 + 'px'
        el.querySelector(".slider4-line__item-button-button").classList.add('active')
    })
    el.addEventListener('mouseleave', () => {
        el.querySelector('.slider4-line__item-button').style.height = 0 + 'px'
        el.querySelector(".slider4-line__item-button-button").classList.remove('active')
    })
})
document.querySelector('.slider4__next-btn').addEventListener('click', () => {
    offset4 = offset4 + 420
    if (offset4 > ((slider4Item.length - 3) * 420)) {
        offset4 = 0
    }
    slider4line4.style.left = -offset4 + "px"
})
document.querySelector('.slider4__prev-btn').addEventListener('click', () => {
    offset4 = offset4 - 420
    if (offset4 < 0) {
        offset4 = ((slider4Item.length - 3) * 420)
    }
    slider4line4.style.left = -offset4 + "px"
})