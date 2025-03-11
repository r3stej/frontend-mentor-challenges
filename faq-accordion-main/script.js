document.querySelector('.questions').addEventListener('click', function (e) {

    e.preventDefault();

    let element = e.target;

    if (element.tagName === 'IMG') {
        element = e.target.closest('.accordion');
    }

    if (element.classList.contains('accordion')) {

        let img = element.querySelector('img');

        if (img) {
            if (img.src.includes('icon-plus.svg')) {
                img.src = './assets/images/icon-minus.svg';
            } else {
                img.src = './assets/images/icon-plus.svg';
            }
        }

       if (element.nextElementSibling.style.maxHeight) {
        element.nextElementSibling.style.maxHeight = null;
       }
       else {
        element.nextElementSibling.style.maxHeight = element.nextElementSibling.scrollHeight + "px";
       }
       
    }
    
});