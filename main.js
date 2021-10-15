
if (document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready()
}
function ready() {
    var removecartitembuttons=document.getElementsByClassName('fa-trash')
    console.log(removecartitembuttons)
    for( var i=0; i< removecartitembuttons.length; i++) { 
        var button=removecartitembuttons[i] 
        button.addEventListener('click', romoveCartItem)
          } 
       
    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i=0; i<quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change',quantityChanged)
    }
          
    var btnplus = document.getElementsByClassName('fa-plus')
    for (i=0; i<btnplus.length; i++){
        var plus = btnplus[i]
        plus.addEventListener('click',Increment )
     }

       var btnmins = document.getElementsByClassName('fa-minus')
       for (i=0; i<btnmins.length; i++){
           minus = btnmins[i]
           minus.addEventListener('click',Decrement)
       }

       var heart = document.getElementsByClassName('fa-heart')
       for ( i=0; i<heart.length; i++){
        var heartbtn = heart[i]
        heartbtn.addEventListener('click',like)
       }
    }


function romoveCartItem(event) {
    var buttonclicked = event.target
    buttonclicked.parentElement.parentElement.remove()
    updatecartotal()
}  

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.innerText) || input.innerText<= 0){
        input.innerText = 1
    }
    updatecartotal()
}

function Increment(event) {
    var plus = event.target
    plus.nextElementSibling.innerText++;
    updatecartotal()
}

function Decrement(event){
var minus = event.target
minus.previousElementSibling.innerText--;
updatecartotal() 
}

function like(event){
    var heartbtn = event.target
    if (heartbtn.style.color==='red'){
        heartbtn.style.color='silver'
    }
    else{ heartbtn.style.color='red'
    heartbtn.classList.toggle('red')}
}
    
   function updatecartotal() {
      var  cartitemcontainer=document.getElementsByClassName('cart-items')[0]
      var cartrows= cartitemcontainer.getElementsByClassName('cart-row')
      var total=0
      for(i=0; i<cartrows.length; i++ ){
          var cartrow=cartrows[i]
        var priceElement = cartrow.getElementsByClassName('cart-price')[0] 
        
         var  quantityElement= cartrow.getElementsByClassName('cart-quantity-input')[0]
           var price = parseFloat(priceElement.innerText.replace('$', ''))
           var quantity = quantityElement.innerText
             total = total + (price*quantity)
          document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
          console.log(total)
    }
}
        



  