'use strict';
const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnCloseModalWindow = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');
function closeModalWindow () {
    modalWindow.classList.add('hidden')
    overlay.classList.add('hidden') 
}
function showModalWindow (){
    modalWindow.classList.remove('hidden')
    overlay.classList.remove('hidden')
}

for (let i = 0; i < btnsShowModalWindow.length; i++) {
    btnsShowModalWindow[i].addEventListener('click', showModalWindow)
}

btnCloseModalWindow.addEventListener('click', closeModalWindow)
overlay.addEventListener('click', closeModalWindow);
document.addEventListener('keydown', function (x) {
//     if (x.key === 'Escape') {
//         if (!modalWindow.classList.contains('hidden')){
//             closeModalWindow()
//         }
//     }
// } 

if ((x.key === 'Escape') && (!modalWindow.classList.contains('hidden'))){
    closeModalWindow()
}
                                                }
                        )