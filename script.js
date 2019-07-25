document.addEventListener('mouseover',function(e){
  // console.log(e.target);
   var name = e.target.tagName;
   if(name === 'IMG'){
       e.target.style.opacity = "0.5";
       e.target.addEventListener('mouseout',function(){
          e.target.removeAttribute('style');
       },false);
   }
},false);


