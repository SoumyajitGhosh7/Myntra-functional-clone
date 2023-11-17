let bagItems;
onload();
function onload(){
    let str=localStorage.getItem('bagItems');
    bagItems=str?JSON.parse(str):[];
    displayOnHomescreen();
    displayBagIcon();
}
function addToBag(itemid){
    bagItems.push(itemid);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCnt=document.querySelector('.item-cnt');
    if(bagItems.length>0){
    bagItemCnt.style.visibility='visible';
    bagItemCnt.innerText=bagItems.length;}
    else
    bagItemCnt.style.visibility='hidden';
}

function displayOnHomescreen(){
let itemsCointainerElement=document.querySelector('.items-cointainer');
if(!itemsCointainerElement) return;
let innerHTML='';
items.forEach(item=>{
    innerHTML+=`<div class="item-cointainer">
    <img class="item-img" src=${item.image} alt="Item-img">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count}
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div>
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% off)</span>
        <div class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</div>
    </div>
</div>`
});
itemsCointainerElement.innerHTML=innerHTML;
}
