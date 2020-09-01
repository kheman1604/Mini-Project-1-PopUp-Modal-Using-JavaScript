window.onload=function(){

var container1 = document.querySelector(".modal-container"),
    btn = document.querySelector(".btn"),
    cross1 = document.querySelector(".X"),
    frontcontent=document.querySelector(".front");

btn.addEventListener("click", showmodal);

function showmodal() {
    container1.style.display = "block";
    frontcontent.style.filter="blur(10px)";
}
    
cross1.addEventListener("click",closemodal);
    
    function closemodal(){
        container1.style.display = "none";
    frontcontent.style.filter="blur(0px)";
    }
    
container1.addEventListener("click",closemodal1);
    function closemodal1(e){
        if(e.target.className=="modal-container"){
            container1.style.display = "none";
    frontcontent.style.filter="blur(0px)";
        }
        
    }
}