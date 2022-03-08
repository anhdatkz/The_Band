// RESPONSIVE 
const header = document.getElementById('header')
const mobileMenu = document.getElementById('mobile')
const headerHight = header.clientHeight
const slider = document.getElementById('slider')
const h2Element = document.querySelector('.text-heading')
const textDescription = document.querySelector('.text-description')


//  Tạo Slider
let sliderObject = [
    {
        id: 1,
        img : "./asset/images/chicago.jpg",
        address: "Chicago",
        description: "Thank you, Chicago - A night we won't forget."
    },
    {
        id: 2,
        img : "./asset/images/la.jpg",
        address: "Los Angeles",
        description: "We had the best time playing at Venice Beach!"
    },
    {
        id: 3,
        img : "./asset/images/ny.jpg",
        address: "New York",
        description:"The atmosphere in New York is lorem ipsum."
    }
];

let i = 0
let slideItem = sliderObject.length
const time = 3000
function changeSlider(){
    slider.style.background = `url('${sliderObject[i].img}') top center/ cover no-repeat`
    h2Element.innerHTML = sliderObject[i].address
    textDescription.innerHTML = sliderObject[i].description
    
    if(i < slideItem - 1){
        i++;
    }
    else{
        i = 0
    }
    setTimeout("changeSlider()",time)
}

window.onload = changeSlider

// Đóng mở menu mobile
mobileMenu.onclick = function(){
    let isClose = header.clientHeight === 46;
    if(isClose){
        header.style.height = 'auto'
    }else{
        header.style.height = null
    }
}


//Close khi chọn menu
const menuItems = document.querySelectorAll('#nav li a[href*="#"]')
const sl = menuItems.length
for(let i = 0; i < sl; i++){
    let menuItem = menuItems[i]

    menuItem.onclick = ()=>{
        header.style.height = null
    }
}






// BUY TICKETS MODAL
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.js-modal-close')

//hiển thị modal bằn cách thêm class open
function showBuyTicket(){
    modal.classList.add('open')
}

//đóng modal bằn cách xóa class open
function hideBuyTicket(){
    modal.classList.remove('open')
}

for(const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showBuyTicket)
}

modalClose.addEventListener('click', hideBuyTicket)