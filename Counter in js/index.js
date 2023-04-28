let count = 0;
function add(){
    if(count >= 10){
        document.querySelector(".count").innerHTML = 10;
    }else{
        count++;
        document.querySelector(".count").innerHTML = count;
    }
   
}
function subtract(){
    if(count <= 0){
        document.querySelector(".count").innerHTML = 0;
    }else{
        count--;
        document.querySelector(".count").innerHTML = count;
    }
    
}
