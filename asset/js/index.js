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