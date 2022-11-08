pizzaJson.map( (item, index)=>{
    const s = (el)=>document.querySelector(el);
    const sa = (el)=>document.querySelectorAll(el);

    // clonado uma base html
    let pizzaItem = s('.models .pizza-item').cloneNode(true);

    // colocando dados no html
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    s('.pizza-area').append(pizzaItem)
});