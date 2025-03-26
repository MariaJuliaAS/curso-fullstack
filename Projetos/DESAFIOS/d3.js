const products = [
    { name: 'Maça', price: 2.5 },
    { name: 'Coca cola', price: 8 },
    { name: 'Guarana', price: 5 },
    { name: 'Chocolate', price: 20 }
];

const result = products.find((p) => p.price === 20);
console.log(`O produto ${result.name} possui o valor de ${result.price} reais`)

const filterProduct = products.filter((p) => p.price < 8);
console.log(filterProduct)