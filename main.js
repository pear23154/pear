
$(document).ready(function(){
    update_amount();
    $('.quantity,.price').on('keyup keypress blur change',function(e){
        update_amount()
    } )
})
function update_amount(){
    var sum=0.0
    $('#mytable > tbody > tr').each (function(){
        var quantity= $(this).find('.quantity').val();
        var price= $(this).find('.price').val();
        var amount=(quantity*price)
        sum+=amount;
        $(this).find('.amount').text(''+amount);
    })
    $('.total') .text(sum);
}
var incrementQty;
var decrementQty;
var plusbutn = $('.cart-quantity-plus');
var minusbtn= $('.cart-quantity-minus');
var incrementQty=btnplus.click (function(){
    var $n= $(this)
    .parent('.button-container')
    .find('.quantity');
    $n.val(Number($n.val())+1);
    update_amount();
})
 var decrementQty=minusbtn.click(function(){
     var $n=$(this)
     .parent('.button-container')
     .find ('.quantity')
     var Qtyval= Number($n.val());
     if(Qtyval>0){
         $n.val(Qtyval-1)
     }
     update_amount()
 })
 console.log()

  