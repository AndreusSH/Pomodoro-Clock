var count = 25*60;
var interval = 5*60;
var myVar;
var breakkie;

document.getElementById("start").onclick = function(){
  
    myVar = setInterval (counting , 1000)
  
}  
function counting(){
  
  count -= 1;
  document.getElementById("display").innerHTML =  Math.floor(count/60)+ ":" + count%60;
  
  if (count%60 <10){
    
    document.getElementById("display").innerHTML =  Math.floor(count/60)+ ":" +"0"+ count%60;
  }
 
 
 
  if (count === 0){
    
    clearInterval(myVar);
    breakkie = setInterval(breakTime , 1000);
    
  }
   
}
 

  
  function breakTime(){
    
    interval -= 1;
    document.getElementById("pause").innerHTML =  Math.floor(interval/60)+ ":" + interval%60;
    
   
    if (interval%60 <10){
      
          document.getElementById("pause").innerHTML =  Math.floor(interval/60)+ ":0" + interval%60;

      
    }
    
    
   if (interval === 0){
     
     clearInterval(breakkie);
     
   }
  }

document.getElementById("plus5").onclick = function(){
   
    interval += 60;
  
 //document.getElementById("display").innerHTML = count;
    document.getElementById("pause").innerHTML = (interval/60) + ": 00";
    clearInterval(breakkie);
} ;

document.getElementById("minus5").onclick = function(){
   
   
    interval -= 60;
  
 if (interval >=0){
 document.getElementById("pause").innerHTML = (interval/60) + ": 00";
clearInterval(myVar);
 }  
  
};


 document.getElementById("plus").onclick = function(){
   
    count += 60;
  
 //document.getElementById("display").innerHTML = count;
    document.getElementById("display").innerHTML = (count/60) + ": 00";
    clearInterval(myVar);
} ;

 document.getElementById("minus").onclick = function(){
   
   
    count -= 60;
  
 if (count >=0){
 document.getElementById("display").innerHTML = (count/60) + ": 00";
clearInterval(myVar);
 }  
  
};

 document.getElementById("stopping").onclick = function() {
   
    clearInterval(myVar);
    clearInterval(breakkie);
 }
 
 
 document.getElementById("resetBut").onclick = function(){
   
   count = 25*60;
   
  document.getElementById("display").innerHTML = (count/60) + ":00";
    clearInterval(myVar);
   
   var interval = 5*60;
   
    document.getElementById("pause").innerHTML = (interval/60)+ ":00";
   clearInterval(interval);
 }
