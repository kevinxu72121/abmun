let dropdowns = document.querySelectorAll('.dropdown');
let dropDisappearTimer;
console.log("don't look at the speghetti code please. Thanks!")

for(let i of dropdowns){
    let dItems = document.querySelector('.dropdown-items[d-val="'+i.getAttribute('d-val')+'"]');
    
    i.addEventListener('mouseover', function(){
        dItems.style.display = "block";
        dItems.children[0].style.display = "flex";
    })
    
    // speghetti code moment :sklown:
    i.addEventListener('mouseout', function(){
        if(document.querySelector('.dropdown-items[d-val="'+i.getAttribute('d-val')+'"]:hover') == null){
            dItems.style.display = "none";
        }
    })
    dItems.addEventListener('mouseout', function(){
        if(document.querySelector('.dropdown[d-val="'+i.getAttribute('d-val')+'"]:hover') == null && document.querySelector('.dropdown-items[d-val="'+i.getAttribute('d-val')+'"]:hover') == null){
            dItems.style.display = "none";
        }
    })
}