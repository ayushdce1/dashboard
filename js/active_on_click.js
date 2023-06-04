var total_nav_item = document.getElementById("sidebar").getElementsByClassName("nav_item").length;

for(i=0;i<total_nav_item;i++){
    

    document.getElementById("sidebar").getElementsByClassName("nav_item")[i].addEventListener("click", (event)=>{


    for(j=0;j<total_nav_item;j++){
        if(document.getElementById("sidebar").getElementsByClassName("nav_item")[j].classList.contains("active")){

            document.getElementById("sidebar").getElementsByClassName("nav_item")[j].classList.remove("active");
        }
    }
    
    event.target.classList.add("active");
   

});

}