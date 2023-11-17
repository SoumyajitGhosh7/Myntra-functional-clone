loadBag();
function loadBag(){
let selectedItems=document.querySelector('.bag-items-container');
let bagSummary=document.querySelector('.bag-summary');
let totalMrp=0;
let disOnMrp=0;
const fee=49;
let innerHTML='';
bagItems.forEach(element => {
    
    items.forEach(item=>{
        
        if(element==item.id){

            totalMrp+=item.original_price;
            disOnMrp+=item.original_price-item.current_price;
            innerHTML+=`
<div class="bag-item-container">
            <div class="item-left-part">
              <img class="bag-item-img" src="../${item.image}">
            </div>
            <div class="item-right-part">
              <div class="company">${item.company}</div>
              <div class="item-name">${item.item_name}</div>
              <div class="price-container">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
              </div>
              <div class="return-period">
                <span class="return-period-days">${item.return_period} days</span> return available
              </div>
              <div class="delivery-details">
                Delivery by
                <span class="delivery-details-days">${item.delivery_date}</span>
              </div>
            </div>

            <div onclick="remove(${item.id})" class="remove-from-cart">X</div>
          </div>
`

        }
        
    })
});
let totalItem=bagItems.length;
selectedItems.innerHTML=innerHTML;
if(bagItems.length>0){
bagSummary.innerHTML=`
<div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalMrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs ${Math.floor(disOnMrp)}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs ${fee}</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs ${Math.ceil(totalMrp-disOnMrp+fee)}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>
        </div>
`
}else{
    bagSummary.innerHTML='';
}
}
function remove(id){
    bagItems=bagItems.filter(bagItemId=>bagItemId!=id);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
    loadBag();
}