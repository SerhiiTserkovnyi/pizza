let pizzaContainer = document.querySelector('.box-container');
let pizzaFilter = document.querySelector('.pizza-filter');
let backFilter = document.querySelector('.back-filter');
let modalClose = document.querySelector('.modal-close');
let modalContent = document.querySelectorAll('.modal-content');
let modalSpan = document.querySelectorAll('.modal-content span');
let pizza = [{
        pizzaName: 'Чикен Сладкий Чили',
        pizzaPrice: 122,
        imagePizza: "images/pizza/1.png",
        descriptionPizza: 'Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...'
    },
    {
        pizzaName: 'EASY PEASY огуречный расколбас',
        pizzaPrice: 122,
        imagePizza: "images/pizza/2.png",
        descriptionPizza: 'Курица, Лук, Перец Халапеньо...'
    },
    {
        pizzaName: 'EASY PEASY чикен а-ля <br>хрен',
        pizzaPrice: 122,
        imagePizza: "images/pizza/3.png",
        descriptionPizza: 'Курица, Лук, Соус Карбонара,...'
    },
    {
        pizzaName: '4 сезона',
        pizzaPrice: 122,
        imagePizza: "images/pizza/4.png",
        descriptionPizza: 'Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы мари...'
    },
    {
        pizzaName: 'Пепп',
        pizzaPrice: 122,
        imagePizza: "images/pizza/5.png",
        descriptionPizza: 'Огурцы маринованные, Пепперони, Сыр Моцарелла...'
    },
    {
        pizzaName: 'Пепп',
        pizzaPrice: 122,
        imagePizza: "images/pizza/6.png",
        descriptionPizza: 'Огурцы маринованные, Пепперони, Сыр Моцарелла...'
    },
    {
        pizzaName: 'Пепп',
        pizzaPrice: 122,
        imagePizza: "images/pizza/7.png",
        descriptionPizza: 'Огурцы маринованные, Пепперони, Сыр Моцарелла...'
    },
    {
        pizzaName: 'Пепп',
        pizzaPrice: 122,
        imagePizza: "images/pizza/8.png",
        descriptionPizza: 'Огурцы маринованные, Пепперони, Сыр Моцарелла...'
    }
];
console.log(pizza);
pizza.forEach(({ pizzaName, pizzaPrice, imagePizza, descriptionPizza }) => {
    pizzaContainer.innerHTML += `
    <div class="box">
    <img src="${imagePizza}" alt="" srcset="">
    <div class="name-pizza">${pizzaName}</div>
    <div class="description-pizza">${descriptionPizza}</div>
    <div class="footer-pizza">
        <div class="btn">Выбрать</div>
        <div class="price">от ${pizzaPrice} грн</div>
    </div>
</div>
    `;
});
pizzaFilter.addEventListener('click', () => {
    backFilter.classList.add('active');
});
modalClose.addEventListener('click', () => {
    backFilter.classList.remove('active');
});
modalContent.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
    });

});