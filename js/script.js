pizzaJson.map( (item, index)=>{
    const s = (el)=>document.querySelector(el);
    const sa = (el)=>document.querySelectorAll(el);

    // clonado uma base html
    let pizzaItem = s('.models .pizza-item').cloneNode(true);

    s('.pizza-area').append(pizzaItem)
});