
let trush=  document.getElementsByClassName('fas fa-trash');
trush.map((el)=>
el.addeventlistener('click',function(){
    el.parentNode.remove()
})
)



   


   


  