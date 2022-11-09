pizzaJson.map( (item, index)=>{
    const s = (el)=>document.querySelector(el);
    const sa = (el)=>document.querySelectorAll(el);

    // clonado uma base html
    let pizzaItem = s('.models .pizza-item').cloneNode(true);

    // colocando dados no html
    pizzaItem.setAttribute('data-key', index)
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('date-key');
        console.log(pizzaJson[key]);
        // s('.pizzaInfo h1').innerHTML = pizzaJson[key].name;


        s('.pizzaWindowArea').style.opacity = 0;
        s('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            s('.pizzaWindowArea').style.opacity = 1;
        },200);
    })
   
    s('.pizza-area').append(pizzaItem)
});
