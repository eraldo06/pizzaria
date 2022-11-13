const s = (el)=>document.querySelector(el);
const sa = (el)=>document.querySelectorAll(el);
let modalQt = 1;
let cart = [];
let modalKey = 0;

// LISTAGEM DAS PIZZAS
pizzaJson.map((item, index)=>{
   
    // clonado uma base html
    let pizzaItem = s('.models .pizza-item').cloneNode(true);

    // colocando dados no html
    pizzaItem.setAttribute('data-key', index);
    pizzaItem.querySelector('.pizza-item--img img').src = item.img;
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name;
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`;

    // MODAL
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQt = 1;
        modalKey = key;

        s('.pizzaBig img').src = pizzaJson[key].img;
       s('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
       s('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
       s('.pizzaInfo--actualPrice').innerHTML = `R$ ${pizzaJson[key].price.toFixed(2)}`;
       sa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
       })

        s('.pizzaInfo--qt').innerHTML = modalQt

        s('.pizzaWindowArea').style.opacity = 0;
        s('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            s('.pizzaWindowArea').style.opacity = 1;
        },100);
    })
   
    s('.pizza-area').append(pizzaItem)
});

// EVENTOS DO MODAL
function closeModal(){
    s('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        s('.pizzaWindowArea').style.display = 'none';
    },100)
}
sa('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
})
s('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if(modalQt > 1){
        modalQt--;
        s('.pizzaInfo--qt').innerHTML = modalQt;
    }
})
s('.pizzaInfo--qtmais').addEventListener('click',()=>{
    modalQt++;
    s('.pizzaInfo--qt').innerHTML = modalQt;
})
sa('.pizzaInfo--size').forEach((size, sizeIndex)=>{
    size.addEventListener('click', (e)=>{
        s('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected')
    })
})


// ADICIONANDO NO CARRINHO
s('.pizzaInfo--addButton').addEventListener('click', ()=>{
    let size = parseInt(s('.pizzaInfo--size.selected').getAttribute('data-key'))

    let identifier = pizzaJson[modalKey].id+'@'+size;
    let key = cart.findIndex((item)=>item.identifier == identifier);

    if(key >- 1){
        cart[key].qt += modalQt
    }else{
        cart.push({
            identifier,
            id:pizzaJson[modalKey].id,
            size,
            qt:modalQt,
        })
    }
    updateCart()
    closeModal()
})

function updateCart(){
    if(cart.length >0){
        s('aside').classList.add('show');
        for(let i in cart){
            let pizzaItem = pizzaJson.find((item)=>item.id==cart[i].id)
        }
    }else{
        s('aside').classList.remove('show');
    }
}