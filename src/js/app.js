document.addEventListener('DOMContentLoaded', function () {

    let list = document.querySelector('.catalog-full-navigation-list'),
        catalogMenu = document.querySelector('.catalog-menu'),
        catalogLink = document.querySelectorAll('.catalog-list-item-product-cart__link'),
        catalogLinkArr = Array.prototype.slice.call(catalogLink)

    list.addEventListener('mouseup', function (e) {
        if (e.target.className == 'catalog-full-navigation-list-item') {
            e.target.classList.add('active');
        } else if (e.target.className == 'catalog-full-navigation-list-item active') {
            e.target.classList.remove('active');
        }
        if (e.target.className == 'inner-list') {
            e.target.classList.add('active');
        } else if (e.target.className == 'inner-list active') {
            e.target.classList.remove('active');
        }
    });

    catalogMenu.addEventListener('mouseup', function () {
        let catalogFull = document.querySelector('.catalog-full');
        let catalogMenuBlock = document.querySelector('.catalog-menu-block');
        catalogFull.classList.toggle('visible');
        catalogMenuBlock.classList.toggle('active');
    });

    
    catalogLinkArr.forEach(link => {
        link.addEventListener('mouseup', function (e) {
            link.parentNode.parentNode.nextElementSibling.classList.toggle('visible');
            link.parentNode.parentNode.nextElementSibling.className == 'catalog-list-item-offers visible' ? link.innerText = 'скрыть другие предложения' : link.innerText = 'показать другие предложения'

        })
    })

})