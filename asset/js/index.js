// RESPONSIVE 
const header = document.getElementById('header')
const mobileMenu = document.getElementById('mobile')
const headerHight = header.clientHeight

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