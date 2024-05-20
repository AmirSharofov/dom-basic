const color_wh = document.querySelector('.color_wh')
const color_sg = document.querySelector('.color_sg')
const data_512gb = document.querySelector('.data_512gb')
const data_1tb = document.querySelector('.data_1tb')
const data_2tb = document.querySelector('.data_2tb')
const data_4tb = document.querySelector('.data_4tb')
const price = document.querySelector('.price')
const macbook_image = document.querySelector('.macbook_image')


color_wh.onclick = () => {
    color_wh.classList.add('active_color')
    macbook_image.getAttribute('macbook_image')
}
color_sg.onclick = () => {
    color_sg.classList.add('active_color') 
    color_wh.classList.remove('active_color')
    macbook_image.src = './spacegrey.png'
}

data_512gb.onclick = () => {
    data_512gb.classList.add('active_data')
    data_1tb.classList.remove('active_data')
    data_2tb.classList.remove('active_data')
    data_4tb.classList.remove('active_data')
    price.textContent = "$1,999"
}
data_1tb.onclick = () => {
    data_512gb.classList.remove('active_data')
    data_1tb.classList.add('active_data')
    data_2tb.classList.remove('active_data')
    data_4tb.classList.remove('active_data')
    price.textContent = "$2,199"

}
data_2tb.onclick = () => {
    data_512gb.classList.remove('active_data')
    data_1tb.classList.remove('active_data')
    data_2tb.classList.add('active_data')
    data_4tb.classList.remove('active_data')
    price.textContent = "$2,399"
}
data_4tb.onclick = () => {
    data_512gb.classList.remove('active_data')
    data_1tb.classList.remove('active_data')
    data_2tb.classList.remove('active_data')
    data_4tb.classList.add('active_data')
    price.textContent = "$2,599"

}