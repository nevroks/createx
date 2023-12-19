document.querySelectorAll('.ourWork__categories-list__item').forEach((el) => {
    el.addEventListener('click', (e) => {
        const eventId = e.target.dataset.id

        function change() {
            document.querySelectorAll('.ourWork__categories-list__item').forEach(item => item.classList.remove('active'))
            e.target.classList.add('active')

            switch (eventId) {
                case 'all':
                    filter('ourWork__projects-item')
                    break
                case 'Construction':
                    filter(eventId)
                    break
                case 'Project-Development':
                    filter(eventId)
                    break
                case 'Interior-Design':
                    filter(eventId)
                    break
                case 'Repairs':
                    filter(eventId)
                    break

            }
        }
        change()
        console.log(eventId);
    })
})

function filter(className) {
    document.querySelectorAll(".ourWork__projects-item").forEach((el) => {
        if (el.classList.contains(className)) {
            el.style.display = 'block'
        } else {
            el.style.display = 'none'
        }
    })
}



document.querySelectorAll(".ourWork__projects-item").forEach((el) => {
    el.addEventListener('mouseenter', () => {
        el.querySelector('.ourWork__projects-item-button').style.height = 68 + 'px'
    })
    el.addEventListener('mouseleave', () => {
        el.querySelector('.ourWork__projects-item-button').style.height = 0 + 'px'
    })
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