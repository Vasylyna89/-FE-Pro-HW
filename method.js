let goods = [
    {id: 1, title: 'Микроволновка', price: 1500, count: 4},
    {id: 2, title: 'Телевизор', price: 2500, count: 1},
    {id: 3, title: 'Тумба', price: 5500, count: 5},
    {id: 4, title: 'Холодильник', price: 200, count: 2},
    {id: 5, title: 'Стол', price: 5600, count: 5},
    {id: 6, title: 'Телефон', price: 1900, count: 12},
    {id: 7, title: 'Компьютер', price: 4200, count: 11},
    {id: 8, title: 'Мангал', price: 250, count: 7},
    {id: 9, title: 'Люстра', price: 300, count: 3},
 ]

 /*Используя этот массив, необходимо решить ряд задач:

1.Отфильтруйте массив таким образом, чтобы там оказались элементы с четным значением ID */
//let resalt = goods.filter( (el) => el.id % 2 === 0)

/*2.Отфильтруйте продукты с количеством менее 5 единиц */
// const allproducts = goods.filter((product) => product.count < 5)
// console.log(allproducts);

/*3.Найдите значение элемента массива (продукта), цена которого будет кратна 5*/
// let element = goods.find((product) => product.price % 5 === 0)
// console.log(element);
/*
4.Найдите индекс элемента, count которого будет больше 11 */
 
// const index = goods.find((elem) => elem.count > 11)
// console.log(index);

/*5.Посчитайте количество элементов, count которых является нечетным числом */

// const suma = goods.filter((elem) => elem.count  % 2 !== 0)
// console.log( suma);

/*6.Посчитайте количество элементов, имя которых начинается на “Т” */
//  let resalt = goods.filter((elem) =>  elem.title[0] === 'Т')
//  console.log(resalt);

/*7.Проверьте, есть ли хотя бы один продукт с ценой выше 500.*/

// const product = goods.some ((prod) => prod.price > 500)
// console.log(product);

/*8.Создайте новый массив, элементы которого будут хранить значение цен всех товаров
 с 35-процентной скидкой (только цены)*/

 let allProductsPrice = goods.map(( elem) => elem.price * 0.65 )
 console.log(allProductsPrice);

/*9.Создайте новый массив, изменив только 1 сво-во count на значение 0 для всех элементов 
(учитывая другие  сво-ва)*/

const allElement = goods.map ((product) =>({
    ...product,
    count:0
}))

console.log(allElement);