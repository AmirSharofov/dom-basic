const color_wh = document.querySelector('.color_wh').parentElement
const color_sg = document.querySelector('.color_sg').parentElement

color_wh.onclick = () => {
    color_wh.classList.add('active_color')
}
color_sg.onclick = () => {
    color_sg.classList.add('active_color')
    color_wh.classList.remove('active_color')

}
