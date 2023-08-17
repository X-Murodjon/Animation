window.addEventListener('DOMContentLoaded', function () {
    let products = document.querySelectorAll('.product'),
    buttons = document.querySelectorAll('button'),
    openBTN = document.querySelector('.open');

    function createCart(){
        let cart = document.createElement('div'),
        field = document.createElement('div'),
        heading = document.createElement('h2')
        coloseBTN = document.createElement('button');

        cart.classList.add('cart')
        field.classList.add('cart-field')
        coloseBTN.classList.add('close')

        heading.textContent = 'В нашей корзине'
        coloseBTN.textContent= 'Закрыть'
        
        document.body.appendChild(cart)
        cart.appendChild(heading)
        cart.appendChild(field)
        cart.appendChild(coloseBTN)
    }
    createCart()

    let cart = document.querySelector('.cart'),
    closeBTN = document.querySelector('.close'),
    field = document.querySelector(".cart-field")

    openBTN.addEventListener('click', () => {
       cart.style.display = 'block';
    })
    closeBTN.addEventListener('click', () =>{
        cart.style.display = 'none';
    })


    buttons.forEach((item,i) => {
        item.addEventListener('click', () => {
              let cloneItem = products[i].cloneNode(true),
              btn = cloneItem.querySelector('button');
              
              btn.remove()
              field.appendChild(cloneItem)
              products[i].remove()
        })
    })
})

