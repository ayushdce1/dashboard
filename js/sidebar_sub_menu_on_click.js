var total_sub_menu = document.getElementsByClassName("sub_menu").length;

for(i=0;i<total_sub_menu;i++){
    
    
document.getElementsByClassName("sub_menu")[i].addEventListener("click", (event)=>{

    


    event.target.nextElementSibling.classList.toggle("active");
    event.target.classList.toggle("arrow_rotate_new");

});

}

